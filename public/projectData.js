const projectData = {
    "projects": [
        {
            "name": "Bentofy",
            "description": "This is a one-stop hub of your own life that you can share with all of those arounds you in the form of the trending Bento UI style.",
            "image": "/thumbnails/bento_screenshot.webp",
            "link": "https://bentofy.vercel.app/",
            "githubLink": "https://github.com/Michaell14/Bentofy/tree/main",
            "tags": ["In Development"]
        },{
            "name": "Eat the Hotdog",
            "description": "A Unity game developed at UMD's Bitcamp Hackathon using an Arduino, accelerometer, and the Unity game engine",
            "image": "/bitcamp/prototype.webp",
            "link": "/projects/bitcamp",
            "githubLink": "https://github.com/Michaell14/Arduino-Controller-for-Hotdog-Unity-Game",
            "tags": ["Article", "Hardware", "Hackathon"]
        },{
            "name": "Spotify Music Box",
            "description": "A Music box developed with the Spotify API",
            "image": "/musicbox/final_setup.webp",
            "link": "/projects/musicbox",
            "githubLink": "",
            "tags": ["Article", "Hardware"]
        },{
            "name": "Unbe-leaf-able AI", 
            "description": "Developed a program using Python, PyTorch, and Leafsnap Plant data to evaluate the accuracy of two machine learning models in identifying 185 species of leaves",
            "image": "/thumbnails/unbeleafable.webp", 
            "link": "/projects/unbeleafable", 
            "githubLink": "https://docs.google.com/presentation/d/1B_lBIkfkwzQYYXZVgo_IbSufFFa0JNr1PCqukg4qOpE/edit?usp=sharing",
            "tags": ["Article", "Artificial Intelligence"]
        },{
            "name": "PClassic.org", 
            "description": "Currently maintaining the UI/functionality of the Philadelphia Classic's (PClassic) website.",
            "image": "/thumbnails/pclassic.webp", 
            "link": "https://www.pclassic.org/", 
            "githubLink": "https://github.com/pclassic",
            "tags": []
        },{
            "name": "Wootton Life", 
            "description": "A listing for students at Thomas S. Wootton HS to view upcoming clubs and activities. Created in an effort to promote school spirit and club interactivity.",
            "image": "/thumbnails/Wootton-Life.webp", 
            "link": "https://woottonlife.vercel.app/", 
            "githubLink": "https://github.com/Michaell14/woottonlife",
            "tags": []
        },{
            "name": "Encryptable", 
            "description": "A tool to help visualize popular text encryption ciphers. Created to make learning about ciphers easier for students to understand.",
            "image": "/thumbnails/encryptable_ss.webp", 
            "link": "https://encryption-visualizer.vercel.app/", 
            "githubLink": "https://github.com/Michaell14/encrypt-visualizer",
            "tags": []
        },
        {
            "name": "Codele", 
            "description": "A parody of Wordle, but instead, you guess a random programming language!", 
            "image": "/thumbnails/Codele.webp", 
            "link": "https://codele.vercel.app/", 
            "githubLink": "https://github.com/Michaell14/codele",
            "tags": []
        }   
    ]
}

module.exports = {
    projectData: projectData["projects"]
}