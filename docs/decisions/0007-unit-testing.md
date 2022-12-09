# Unit Testing

[Return to index](https://cse210-group5.github.io/cse210-fa22-ucsd-group5/decisions/)

|  Status   | Confidence    |   Date    |
| --------  | ----------    | --------- |
| Decided   | High          | 19-Nov-22 |

## Context and Problem Statement

We want to write unit tests for our backend javascript code. This is however not straightforward as it uses IndexedDB which is available only in browser environments.

## Decision Drivers

* Easy to write tests
* Should work with indexedDB

## Decision Outcome

Use fake-indexeddb + jest as fake-indexeddb is the only indexeddb mocking wrapper. This allowed us to run tests independently.

## More Information

More about using this testing framework can be found [here](https://dev.to/andyhaskell/testing-your-indexeddb-code-with-jest-2o17)

