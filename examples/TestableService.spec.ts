import 'jest';

import { TestableService } from './TestableService';

let sut: TestableService = undefined;

beforeEach(() => {
  sut = new TestableService();
});

test('add() returns the correct result', () => {
  const result: number = sut.add(5, 2);
  expect(result).toEqual(7);
});

test('addAsync() returns the correct result', (done) => {
  sut.addAsync(5, 2, (result: number) => {
    expect(result).toEqual(7);
    done();
  });
});

test('addPromise() returns correct result', () => {
  expect.assertions(1);

  return sut.addPromise(5, 6)
    .then((result: number) => {
      expect(result).toEqual(11);
    });
});

test('addPromise() catches expected exception', () => {
  expect.assertions(1);

  return sut.addPromise(5, 4)
    .then((result: number) => {
      expect(result).toEqual(11);
    })
    .catch((e: Error) => {
      expect(e.message).toEqual('Forced reject when result =9');
    });
});