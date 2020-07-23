import * as R from 'ramda';
import callAll from './index';

describe('CallAll', () => {
  it('should call all functions with args passed', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();

    const callAllMocks = callAll(mock1, mock2);
    callAllMocks(2);
    expect(mock1).toBeCalledWith(2);
    expect(mock2).toBeCalledWith(2);
  });

  it('should return all results in array', () => {
    const callAllMocks = callAll(R.inc, R.dec);
    const results = callAllMocks(1);
    expect(results).toEqual([2, 0]);
  });
});
