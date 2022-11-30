---
# These are optional elements. Feel free to remove any of them.
status: { accepted}
date: {2022-11-03}
---
# Choice of language for Backend

## Context and Problem Statement

The backend will store, manage and update all data that the app will work with. This includes all notes, the topics any configs etc. The methods written in the backend would be called by the frontend and used to serve the data in the app.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Functionality: The language should be a good fit to support the functionality of our app such as integrating well with the storage we use
* Documentation: The language should have good documentation available for learners to work with it
* Simplicity: The language should enable us to accomplish tasks with simple methods.

## Considered Options

* Javascript
* Node.js
* Python

## Decision Outcome

Chosen option: "Javascript", because it is general enough, satisfies capability requirements, some team members have familiarity with it, and integrates well with our frontend tech stack.

<!-- This is an optional element. Feel free to remove. -->
## Pros and Cons of the Options

### Javascript

* Good, because well-known and widely used so has lots of guiding examples and documentation
* Good, because integrates well with a javascript based frontend
* Good, because some team members are well versed in it
* Bad, because it has a slightly strict learning curve for the newer practitioners

### Python

{example | description | pointer to more information | …}

* Good, because very familiar and easy to work with
* Bad, because not easy to integrate with a web application fontend design that we have
* Bad, because can be cumbersome to write simple functionality
