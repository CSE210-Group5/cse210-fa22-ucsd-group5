# Documentation for the C4 Diagram

Our local-first 'Tweet Management System' is modeled using the C4 Architecture as follows:

In the context of our project,
1. Notes are synonymous with tweets.
2. Folders are synonymous with topics. 

## Level 1: System Context Diagram
![alt text](https://github.com/nirmalthomas2609/cse210-fa22-ucsd-group5/blob/msharan/documentation/docs/c4_model/c4_lev1.png "System Context Diagram")

1. The 'Tweet Management System' is a software that runs on the browser and stores notes locally, using the indexedDB API of the browser.
2. Any web browser can host the 'Tweet Mangement' application, and use its indexedBD API to store notes locally on the browser.
3. The user of the tweet management system is ideally someone who wants to organize, store, and manage their tweets locally first.
4. They will use the 'Tweet Management' web application to organize and store their notes (tweets).
5. [FUTURE SCOPE] The user will also be able to link their twitter account to the main application using the Twitter API, with which they would be able to post any locally saved note, in the web app, to Twitter.
6. [FUTURE SCOPE] The 'Tweet Management' System should be able to post notes to twitter, as per the user's selection. 

## Level 2: Container Diagram
![alt text](https://github.com/nirmalthomas2609/cse210-fa22-ucsd-group5/blob/msharan/documentation/docs/c4_model/c4_lev2.png "Container Diagram")

The Level - 2 Container diagram for the 'Tweet Management' application is axplained as follows:

1. When the user clicks on the packaged application, it triggers a JS Container that fires up the user interface (HTM+CSS), with the view of all locally created (and automatically saved) notes and topics.
2. The web browser then executes the main application, which is developed using HTML, CSS, and JS, to provide all the CRUD functionalities to the tweet management user. 
3. The user uses the main application to Create, Update, Delete, and Read Notes (tweets) and topics (folders).
4. The main application runs on the web browser and stores notes locally using indexedDB. 
5. The main Application can make API calls to the 'Content-Management.js', a JaveScript container, which hosts all the API codebase required to perform CRUD operations on notes and folders. 
6. The 'Content-Management' JS container can read-from and write-to the browser's local database, which is the indexedDB API.
7. IndexedDB is the database used by the application to achieve its purpose of client-side local storage. It can persistently store the notes and folders inside the client's browser.
8. [FUTURE SCOPE] The 'Content-Management' container will also have the API to connect to the user's twitter account, and the API used for posting notes to twitter. 


## Level 3: Component Diagram
![alt text](https://github.com/nirmalthomas2609/cse210-fa22-ucsd-group5/blob/msharan/documentation/docs/c4_model/c4_lev3.png "Component Diagram")

The interactions and the dependencies among the API components in the 'Content-Management' JS container is as follows:

| API                 | Functionality                                                                                     |
|-------------------  | ------------------------------------------------------------------------------------------------  |
| _createTweet_       | Allows users to create new tweets (notes)                                                         |
| _updateTweet_       | Allows the user to update tweets, which are dynamically saved in the browser's indexedDB database |
| _deleteTweet_       | Allows users to delete tweets from local storage                                                  |
| _createTopic_       | Allows users to create new topics (folders) to organise their tweets                              |
| _updateTopic_       | Allows users to update topic names and their content (tweets stored) at any time                  |
| _deletetopic_       | Allows users to delete topics, thereby deleting all notes within that topic folder                |
| _getTweetByTopicID_ | Gets the note corresponding to the folder in which the note is present                            |
| _viewAllTopics_     | Fetches all the created topics from the topic store for the user to view                          |
| _getTweetByID_      | Gets the tweet corresponding to a particular ID                                                   |

The dependencies are as follows:

1. _updateTweet_, and _deleteTweet_ can be implemented on a tweet only after _createTweet_ has been implemented for that tweet. Hence _updateTweet_, _deleteTweet_ uses _createTweet_. 
2. _updateTopic_, and _deleteTopic_ can be implemented on a topic only after _createTopic_ has been implemented for that topic. Hence _updateTopic_, _deleteTopic_ uses _createTopic_. 
3. Only if the tweets are created, we can fetch the tweet using the 'tweet ID' (which is assigned during _createTweet_ API). Hence _getTweetsByID_ uses _createTweet_.
4. When the user clicks on the application, the _viewAllTopics_ API is fired as it is used to fetch all the previosuly created topics and tweets, and render them on the browser (which hosts the main application) for the user. 
5. Only created topics can be fetched by the _viewAllTopics_ API, and hence it uses _createTopic_.
6. Only if the tweets are created, we can fetch the tweet using the 'tweet ID' (which is assigned during _createTweet_ API). Hence _getTweetsByID_ uses _createTweet_.
7. _getTweetsByTopicID_ uses _createTweets_ to create that tweet, and assign an ID to it. It also uses _createTopic_ so that it can fetch the topic corresponding to the tweet, from the topic ID (which is assigned during createTopic)
8. When the application is executed, all the previously stored notes and folders are rendered for the user to view (or read). 

## Level 4: Code Map
![alt text](https://github.com/nirmalthomas2609/cse210-fa22-ucsd-group5/blob/msharan/documentation/docs/c4_model/c4_lev4.svg "Level - 4 Code Map")

1. The index.html, in the front-end side, calls the enlisted JavaScript components (in the above diagram) for launching and running the 'Tweet Management' application.
2. The unit tests for the backend APIs in the content-management.js is contained in db.test.js. The unit tests in db.test.js run in an in-memory implementation of fake-indexedDB. 

###### CREDIT - Diagrams drawn on Lucidchart.com
