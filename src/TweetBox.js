import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault(); // prevents page reload
        db.collection('posts').add({
            displayName: 'Emmanuel',
            username: 'emmanuel',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"></Avatar>
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type="text">

                    </input>
                </div>

                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Enter image URL"
                type="text"></input>

                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
