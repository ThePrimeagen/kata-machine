## Developed live on twitch
[ThePrimeagen](https://twitch.tv/ThePrimeagen)

## Naming
### Lig-Machine
Lengthy Instrumentation Generating Massive Anticompetitive Computational Help for Intermediate Coders // n9

### Ligmata
Literal Improvement Gaining Master and Tutelage on Algorithms
Let's Intelligently Generate Multiple Algorithm Training Assessments // permdaddy

### Sugma Nuts
Studious Users Get Major Abilities. New Useful Training for Students

### Ligma Fart 
Learn Intermediate Groundbreaking Massive Algorithms. Free Algorithm Research & Training System


### If you have a suggestion
make an issue and we will come up with the potential name.

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
