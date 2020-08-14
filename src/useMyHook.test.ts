import {renderHook} from '@testing-library/react-hooks';
import useMyHook from "./useMyHook";

describe('useMyHook', () => {
  it('gives new values after 1s', async () => {
    const {result, waitFor, waitForNextUpdate} = renderHook(() => useMyHook())

    expect(result.current).toBe(0);

    await waitForNextUpdate();

    // await waitFor(() => result.current !== 0, {timeout: 2001});

    expect(result.current).toBe(1);
  })
})
