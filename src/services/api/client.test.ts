import { apiFetch } from './client';
import { ApiError } from './error';

describe('apiFetch', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('should successfully fetch and parse JSON', async () => {
    const mockResponse = { id: 1, name: 'Test' };
    jest.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: jest.fn().mockResolvedValue(mockResponse),
    } as unknown as Response);

    const result = await apiFetch('/test-url');
    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith('/test-url', expect.any(Object));
  });

  it('should include authorization header when token is provided', async () => {
    jest.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: jest.fn().mockResolvedValue({}),
    } as unknown as Response);

    await apiFetch('/test-url', { token: 'my-token' });

    const fetchOptions = jest.mocked(global.fetch).mock.calls[0][1];
    const headers = fetchOptions?.headers as Headers;
    expect(headers.get('authorization')).toBe('Bearer my-token');
  });

  it('should throw ApiError with correct status and message for 401', async () => {
    const errorPayload = { error: 'Invalid credentials' };
    jest.mocked(global.fetch).mockResolvedValue({
      ok: false,
      status: 401,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: jest.fn().mockResolvedValue(errorPayload),
    } as unknown as Response);

    const promise = apiFetch('/test-url');
    
    await expect(promise).rejects.toThrow(ApiError);
    await expect(promise).rejects.toMatchObject({
      status: 401,
      message: 'Unauthorized',
      payload: errorPayload,
    });
  });

  it('should throw ApiError for other non-ok responses', async () => {
    jest.mocked(global.fetch).mockResolvedValue({
      ok: false,
      status: 500,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: jest.fn().mockResolvedValue({ message: 'Internal Server Error' }),
    } as unknown as Response);

    await expect(apiFetch('/test-url')).rejects.toThrow(ApiError);
  });

  it('should handle non-JSON responses gracefully', async () => {
    jest.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'text/plain' }),
      text: jest.fn().mockResolvedValue('Not JSON'),
    } as unknown as Response);

    const result = await apiFetch('/test-url');
    expect(result).toBe('Not JSON');
  });
});
