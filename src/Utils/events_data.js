
import event1 from '../asset/home/Home_p1.png';
import event2 from '../asset/home/Home_p2.png';
import event3 from '../asset/home/Home_p3.png';    

export const latest_events = [
    {
        "title": "Robotics Workshop",
        "date": "2024-06-01",
        "description": "Join us for an exciting workshop on robotics and automation, where you'll learn the basics of building and programming robots.",
        "image": event1,
    },
    {
        "title": "Design Challenge",
        "date": "2024-06-30",
        "description": "Challenge yourself to design a robot that can perform specific tasks, and win exciting prizes.",
        "image": event2,
    },    
    {
        "title": "Innovations in Robotics",
        "date": "2024-08-01",
        "description": "Discover the latest advancements in robotics and automation, from self-driving cars to autonomous drones.",
        "image": event3,
    },

]

import workshop1 from '../asset/events/workshop1.png';
import workshop2 from '../asset/events/workshop2.png';
import GL1 from '../asset/events/GL1.png';
import GL2 from '../asset/events/GL2.png';
import competition1 from '../asset/events/techC1.png';
import competition2 from '../asset/events/techC2.png';
import NTGL1 from '../asset/events/nontechGL1.png';
import NTGL2 from '../asset/events/nontechGL2.png';
import NTcompetition1 from '../asset/events/nontechC1.png';
import NTcompetition2 from '../asset/events/nontechC2.png';

export const other_events = {
    workshops: [
        {
            "title": "3D Printing Workshop",
            "description": "Learn the fundamentals of 3D printing, from design to fabrication, in this hands-on workshop.",
            "image": workshop1,
        },
        {
            "title": "CAD Modeling Workshop",
            "description": "Master the art of CAD modeling with industry-standard software in this comprehensive workshop.",
            "image": workshop2,
        }
    ],
    guest_lectures: [
        {
            "title": "Advancements in Renewable Energy",
            "description": "Learn about the latest advancements in renewable energy sources and their impact on the environment.",
            "image": GL1,
        },
        {
            "title": "The Future of Transportation",
            "description": "Explore the future of transportation and the role of mechanical engineering in shaping it.",
            "image": GL2,
        }
    ],
    competitions: [
        {
            "title": "Design Challenge",
            "description": "Challenge yourself to design a robot that can perform specific tasks, and win exciting prizes.",
            "image": competition1,
        },
        {
            "title": "Innovations in Robotics",
            "description": "Discover the latest advancements in robotics and automation, from self-driving cars to autonomous drones.",
            "image": competition2,
        }
    ],
    non_technical_guest_lectures: [
        {
            "title": "Effective Communication Skills",
            "description": "Learn how to effectively communicate with others, whether it's in a professional setting or in personal relationships.",
            "image": NTGL1,
        },
        {
            "title": "Time Management Strategies",
            "description": "Discover techniques to manage your time efficiently and increase productivity in both academic and personal life.",
            "image": NTGL2, 
        }
    ],
    non_technical_competitions: [
        {
            "title": "Sports Meet",
            "description": "Join us for a fun and competitive sports meet, where you can showcase your skills and compete with others.",
            "image": NTcompetition1,
        },
        {
            "title": "Chess Tournament",
            "description": "Challenge yourself to a chess tournament and show off your strategic thinking and problem-solving skills.",
            "image": NTcompetition2,
        }
    ]
};


import mechamysteryHunt from '../asset/events/upcoming/mechamystery_hunt.jpg';
import lyricChase from '../asset/events/upcoming/lyric_chase.jpg';
import f1Simulation from '../asset/events/upcoming/f1_simulation.jpg';
import turningTitans from '../asset/events/upcoming/turning_titans.jpg';
import skywings from '../asset/events/upcoming/skywings.jpg';
import fastFingers from '../asset/events/upcoming/fast_fingers.jpg';
import athletics from '../asset/events/upcoming/athletics.jpg';
import carrom from '../asset/events/upcoming/carrom.jpg';
import chess from '../asset/events/upcoming/chess.jpg';

export const upcoming_events = [
    {
        "title": "MechaMystery Hunt",
        "img": mechamysteryHunt,
    },
    {
        "title": "Lyric Chase",
        "img": lyricChase,
    },
    {
        "title": "F1 Simulation",
        "img": f1Simulation,
    },
    {
        "title": "Turning Titans",
        "img": turningTitans,
    },
    {
        "title": "Skywings",
        "img": skywings,
    },
    {
        "title": "Fast Fingers",
        "img": fastFingers,
    },
    {
        "title": "Athletics",
        "img": athletics,   
    },
    {
        "title": "Carrom",
        "img": carrom,
    },
    {
        "title": "Chess",
        "img": chess,
    }
];