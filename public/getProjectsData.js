import React from 'react'

export default function getProjectsData() {
    return (
        {
            "projects": [
                {
                    "name": "Wootton Life", 
                    "description": "A listing for students at Thomas S. Wootton HS to view upcoming clubs and activities. Created in an effort to promote school spirit and club interactivity.",
                    "image": "/Wootton-Life.png", 
                    "link": "https://woottonlife.vercel.app/", 
                    "githubLink": "https://github.com/Michaell14/woottonlife"
                },{
                    "name": "Eat the Hotdog",
                    "description": "A Unity game developed at UMD's Bitcamp Hackathon using an Arduino, acceleratometer, and the Unity game engine",
                    "image": "/bitcamp/green_test_playing.jpg",
                    "link": "/projects/bitcamp",
                    "githubLink": "https://github.com/Michaell14/Arduino-Controller-for-Hotdog-Unity-Game"
                },
                {
                    "name": "Superlatives", 
                    "description": "An online game to play with friends where you vote for the friend who best fits the description of the listed question.",
                    "image": "/Superlatives.png", 
                    "link": "https://superlatives3.vercel.app/", 
                    "githubLink": "https://github.com/Michaell14/superlatives3"
                },
                {
                    "name": "Encryptable", 
                    "description": "A tool to help visualize popular text encryption ciphers. Created to make learning about ciphers easier for students to understand.",
                    "image": "/Encryptable.png", 
                    "link": "https://encryption-visualizer.vercel.app/", 
                    "githubLink": "https://github.com/Michaell14/encrypt-visualizer"},
                {
                    "name": "Codele", 
                    "description": "A parody of Wordle, but instead, you guess a random programming language!", 
                    "image": "/Codele.png", 
                    "link": "https://codele.vercel.app/", 
                    "githubLink": "https://github.com/Michaell14/codele"
                }   
            ]
        }
    )
}
