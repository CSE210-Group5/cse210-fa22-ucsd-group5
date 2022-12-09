# Unit Testing Framework

[Return to index](https://cse210-group5.github.io/cse210-fa22-ucsd-group5/decisions/)

|  Status   | Confidence    |   Date    |
| --------  | ----------    | --------- |
| Decided   | High          | 19-Nov-22 |

## Context and Problem Statement

We need to pick the unit testing framework to be used for BE API testing

## Decision Drivers

* Easy integration
* Thorough testing
* Easy / Fast to run

## Decision Outcome

We chose to use FakeIndexedDB and Jest. These simulate the production setttings well and allow us to test simply all of our backend functionality.