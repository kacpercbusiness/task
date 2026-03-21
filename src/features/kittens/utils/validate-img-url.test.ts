import { validateImageUrl } from './validate-img-url';

describe('validateImageUrl', () => {
  it('should return true for valid https://placekitten.com URL', () => {
    expect(validateImageUrl('https://placekitten.com/200/300')).toBe(true);
  });

  it('should return false for non-https URL', () => {
    expect(validateImageUrl('http://placekitten.com/200/300')).toBe(false);
  });

  it('should return false for unsupported domain', () => {
    expect(validateImageUrl('https://example.com/kitten.jpg')).toBe(false);
  });

  it('should return false for invalid URL format', () => {
    expect(validateImageUrl('not-a-url')).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(validateImageUrl('')).toBe(false);
  });
});
