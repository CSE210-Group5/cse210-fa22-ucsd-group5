# Data Storage

[Return to index](https://cse210-group5.github.io/cse210-fa22-ucsd-group5/decisions/)

|  Status  | Confidence |   Date    |
| -------- | ---------- | --------- |
| Decided | Moderate | 28-Oct-22 |

Supports [ADR-0004](0004-backend-language.md)

## Context and Problem Statement

Our application will need to store, update and delete data to be able to function. We are looking at different storage options to be able to handle this well.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Simplicity of integration
* Platform independence

## Considered Options

* Indexed DB
* Local Storage

## Decision Outcome

Chosen option: "Indexed DB", because it works best for our use case and can support 

## Pros and Cons of the Options

### Indexed DB

* Good, because Indexed DB supports media content while local storage serves as a simple key-value pair which should be sufficient to store the app config.
* Good, because being a non-relational DB supports addition of attributes as we build features (inline with the agile methodology)
* Bad, becasue it is asynchronous and might present challenges

### Local Storage

* Good, because easy and familiar
* Bad, becasue varies with different systems and environments 
* Bad, because does not support easy addition of fields or media
