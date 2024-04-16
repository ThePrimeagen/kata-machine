export function strictSimpleArray<T>(arr: T[]): T[] {
  return new Proxy(arr, {
    get(target, prop, receiver) {
      if (typeof prop === "string" && !isNaN(parseInt(prop))) {
        return getValueInsideRange(target, parseInt(prop));
      }
      return Reflect.get(target, prop, receiver);
    }
  })
}

function getValueInsideRange<T>(target: T[], prop: number) {
  const value = target[prop];
  if (value === undefined) {
    // I know that exceptions sucks, but I think this is a good case for it
    throw new OutOfBoundsError(prop, target.length)
  }

  return value;
}

class OutOfBoundsError extends Error {
  constructor(prop: number, length: number) {
    super(`Index out of bounds, trying to access key ${prop} in array of length ${length}`);
  }
}
