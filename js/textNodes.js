const textNodes = [
    { 
        id: 1, 
        text: 'You are young squire and visiting Sir William\'s castle. During your visit time you were taking to the room, where you will spent night and rest before tommorow\'s training sesion. You were very pleased to be here, and can\'t wait for tommorow. Finally, you fell asleep',
        image: 'images/1.jpg',
        options: [
            {
                text:'Continue',
                setStats: { Energy: 50, Hp: 1},
                nextText: 2
            }
        ]
    },
    { 
        id: 2,
        text: 'Next morning you woke up just before sun rise. You spent some time thinking what will awaits you in today\'s training. Few hours later somebody\'s knockin your door and shouts: squire ' + playerName + ' knight Rolph the Gracious will be waiting for you after launch at the Rose n Wine Tavern. Now come for the your royal launch to refill you energy before awaiting long training sesion',
        image: 'images/2.jpg',
        options: [
            {
                text: 'Of course sir. I dress up and went straight for launch. (I\'m so motivated!) ',
                setStats: { Energy: -5, Hp: 1},
                setState: { motivated: 2 }, 
                nextText: 3

            },
            {
                text: 'Well actually I am not hungry. So I pass today\'s launch',
                setStats: { Energy: -3},
                 
                nextText: 5

            },
            {
                text: 'Ok, if you say so...',
                setStats: { Energy: -5, Hp: 1},
                nextText: 3

            },
            {
                text: 'Well actually I need more sleep.',
                setStats: { Energy: 1 },
                setState: { lazy: 5 }, 
                nextText: 3
            }
        ]
    },
    { 
        id: 3,
        text: 'You came to castle\'s guards banquet room. You see that Sir William\'s soldiers is quite well fed. There are veries food asortiment. You sit at the table with other castles guards. One of the guard asked you: What that young fella like you brings ya there?  ',
        image: 'images/3.jpg',
        options: [
            {
                text: 'I am a squire. I allways dreamt to become a Knight one day. I am so happy to have this oportunity. Can\'t wait for my first training sesion',
                setStats: { Energy: -2 },
                setState: { motivated: 3 },
                nextText: 3.1
            },
            {
                text: 'Actually I am there to do my training sesion and maybe I become a knight',
                setStats: { Energy: -1 },
                nextText: 4

            },
            {
                text: 'Not your bussines what brings me there. Mind your own things',
                setStats: { Energy: -1 },
                setState: { rude: 3 },
                nextText: 5

            }
        ]
    },
    { 
        id: 3.1,
        text: 'Guard: you are very brave fella. I see bright future in your spirit... Take this necklace, It\'s my lucky telisman, that my grandpa gave to me long time ago, perhaps it will have some useful benefits for your adventure. Me is quite old and I berely leave this castle\'s garison, that my duty to spend my rest of life in this boredom.. So this item has no uses for me anymore ',
        options: [
            {
                text: 'Take neckace',
                setItem: {old_neckace: true},   
                nextText: 4
            },
            {
            
                text: 'Refuse. Saying: I can\'t take that item it is too value for you',
                setState: { kind: 5 },
                nextText: 4

            }
        ]
    },
    { 
        id: 4,
        text: 'Some time later you went straight to the Rose n Wine Tavern, where you supposed to meet the Rolph the Gracious. Few moment later Rolph the Gracious shows up and start conversation with you. Rolph the Gracious: Well, perhaps you are my new squire. My name is Rolph known as the Gracious. What your name and what is your backstory ?' ,
        options: [
            {
                text: 'My name is ' + playerName + 'That right I\'m a new squire. I came here to become a knight. My parents passed away many yearsago. I would like to be  part of the knighthood. I cant\'t wait for our training sesion',
                setStats: { Energy: -2 },    
                setState: { motivated : 3 },
                nextText: 5
            },
            {
            
                text: 'My name is ' + playerName + 'I came here because I don\'t have nowhere to go my parents passed away. So my life path brings me there',
                setStats: { Energy: -1 },
                setState: { motivated : -1 },
                nextText: 5

            },
            {
            
                text: 'Call me ' + playerName + 'I rather won\'t tell anything about myself... lets go training',
                setStats: { Energy: -1 },
                setState: { motivated : -1, rude: 2 },
                
                nextText: 5

            },
            {
            
                text: 'Oh no no, I am Jacky.. the pit-digger. I am here to make you die! ',
                setState: { Energy: -1 },
                setState: { rude : -50 },
                nextText: 4.1

            }
        ]
    },
    { 
        id: 4.1,
        text: 'Rolph the Gracious turns at you and shouts: Are your\'s head gone? How you dare to talk with me like this . ' ,
        options: [
            {
                text: 'I tried punch to face',
                setStats: { Energy: -5 },   
                callEvent: 1, 
               
                nextText: 4.2
                
            },
            {
            
                text: 'Ran out like a coward',
                setStats: { Energy: -10 },
                nextText: 0

            }
        ]
    },
    { 
        id: 10,

        text: 'hahaha you bastard',
        
        options: [
            {
                text: 'game over ',
                nextText: 0
            }
         
        ]
    },
    { 
        id: 100,

        text: 'Restart the game?',
        
        options: [
            {
                text: 'yes ',
                
                nextText: -1

            }
        ]
    }
    
    

]