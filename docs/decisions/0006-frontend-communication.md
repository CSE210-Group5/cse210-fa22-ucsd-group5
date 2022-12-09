# Frontend Communication

[Return to index](https://cse210-group5.github.io/cse210-fa22-ucsd-group5/decisions/)

|  Status   | Confidence    |   Date    |
| --------  | ----------    | --------- |
| Decided   | High          | 19-Nov-22 |

## Context and Problem Statement

Our application has 2 distint components the backend and the frontend. The backend provides data storage, retrieval and updation services via callable functions. We need to decide the most suitable way to have the frontend utilize these functions.

## Decision Drivers

* Simple Integration: It should be easy to call from frontend functions
* Handle Asynchronicity: Since Indexed DB is asynchronous we need to be able to handle the same.

## Decision Outcome

Use callback methods from the backend APIs. This would allow us to trigger events and handles the asynchronicity properly.

