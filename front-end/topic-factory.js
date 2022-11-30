let TOPIC_ID = 1;
let DEFAULT_TOPIC = 'General';
class TopicFactory extends AbstractUserMenu {
    constructor(title, db, container, topicid=null, isNewEntry = false) {
        super();

        this.title = title;
    	this.tweets = [];
    	this.topicid = topicid ? topicid : TOPIC_ID++;
    	this.container = container;

    	this.initializeHTML();
        this.textEditor = new TextEditor(this.container);
        this.textEditor.registerObserver(this);
        if (isNewEntry) {
    	    this.initializeDB();
        }
	}

    _tweetClickEvent(tweetData) {
        this.textEditor.start(false, tweetData.content);
    }
    _textEditorUpdate(tweetData) {
        this.newTweet(tweetData); 
        this._toggleSubItems();   
    }
	initializeHTML() {
		// add folder to folder object
        this.topicContainer = document.createElement('div');
        this.topicContainer.classList.add(USER_ITEM_CLASS, SUB_ITEM_CLASS, TOPIC_ITEM_CLASS);
        this.topicContainer.innerHTML = this.title;
        this.htmlElements.push(this.topicContainer);
        
        // New Note
        this.newNoteBtn = document.createElement('button');
        this.newNoteBtn.classList.add(USER_ITEM_CLASS, SUB_ITEM_CLASS);
        this.newNoteBtn.innerHTML ="New Note";
        this.topicContainer.appendChild(this.newNoteBtn);
        this.newNoteBtn.onclick = () => {
            this.textEditor.start();
        }
        TOPIC_ID += 1;
        
        this.container.append(this.topicContainer);

        this._toggleSubItems();
	}

    newTweet(tweetData, id=null) {
        //console.log(tweetData)
        let tweet = new TweetFactory(
            this.title,
            tweetData.title,
            db,
            this.topicContainer,
            tweetData.content,
            tweetData.title,
            tweetData.newTweet
        );
        tweet.registerObserver(this);
        this.tweets.push(tweet);
    }

	initializeDB() {
        createTopic(this.title, console.log);
    }
	

    getTopicDiv() {
        return this.topicContainer;
    }
}