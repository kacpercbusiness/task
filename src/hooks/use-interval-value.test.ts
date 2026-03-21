import { renderHook, act } from '@testing-library/react';

import { useIntervalValue } from './use-interval-value';

describe('useIntervalValue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize with value from generator', () => {
    const generator = jest.fn().mockReturnValue(1);
    const { result } = renderHook(() => useIntervalValue(generator, 1000));
    
    expect(result.current).toBe(1);
    expect(generator).toHaveBeenCalledTimes(1);
  });

  it('should update value after specified delay', () => {
    let count = 0;
    const generator = () => ++count;
    const { result } = renderHook(() => useIntervalValue(generator, 1000));

    expect(result.current).toBe(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(2);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(3);
  });

  it('should clear interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    const { unmount } = renderHook(() => useIntervalValue(() => Math.random(), 1000));
    
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('should update interval when delay changes', () => {
    const generator = jest.fn().mockReturnValue(1);
    const { rerender } = renderHook(
      ({ delay }) => useIntervalValue(generator, delay),
      { initialProps: { delay: 1000 } }
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(generator).toHaveBeenCalledTimes(2);

    rerender({ delay: 500 });
    
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(generator).toHaveBeenCalledTimes(3);
  });
});
