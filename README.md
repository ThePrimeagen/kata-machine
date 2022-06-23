## Lig-Machine
The kata machine makes it easy to run katas on specific algorithms.

### WARNING
I have just started to add algorithms, so the number of supported algorithms is
limited at the moment, but will grow fairly quick.

### Supported Algorithm
* Insertion sort
* Merge sort

### Supported Data Structures
* Singly linked list
* Doubly linked list
* Queue
* Stack

### How It Works

install the dependencies

```bash
yarn install
```

create day 1
```bash
./scripts/v1
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`scripts/v1` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
yarn test
```

I have yet to create a testing strategy for next sets of algorithms, but we
will get there when i cross that bridge.

>>>>>>> feat: ligma sugma
