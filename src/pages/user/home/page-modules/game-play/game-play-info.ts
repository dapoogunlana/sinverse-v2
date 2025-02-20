

import {
    GameplayImgGame,
    GameplayImgPickDrop,
    GameplayImgShootingRange,
    GameplayImgSquidGames,
} from '../../../../../assets/images/new';
import {
    GameplayVidGame,
    GameplayVidPickDrop,
    GameplayVidShootingRange,
    GameplayVidSquidGames,
} from '../../../../../assets/videos';

export const gamePlayInfo = [
    {
        name: 'Game Play',
        image: GameplayImgGame,
        video: GameplayVidGame,
        info: `
            Across many districts in SinVerse, players can engage in a variety of immersive mini-games that 
            add to the excitement of the metaverse. These activities offer fun and rewarding experiences as 
            players progress through challenges and unlock new opportunities. Use your map to navigate to 
            the nearest mini-game in your district and test your skills.
        `,
        active: false,
    },
    {
        name: 'Pick & Drop',
        image: GameplayImgPickDrop,
        video: GameplayVidPickDrop,
        info: `
            In Chinatown, take on the parcel pick-up and delivery quest. Complete parcel drops successfully to 
            unlock in-game rewards, including Gold SIN coins!
        `,
        active: false,
    },
    {
        name: 'Shooting Range',
        image: GameplayImgShootingRange,
        video: GameplayVidShootingRange,
        info: `
            Visit Chinatown's shooting range for a thrilling challenge! Test your aim in single-player or 
            multiplayer mode, hitting as many targets as possible within the time limit to earn in-game 
            rewards and bragging rights.
        `,
        active: false,
    },
    {
        name: 'Squid Games',
        image: GameplayImgSquidGames,
        video: GameplayVidSquidGames,
        info: `
            Located in the Strip, experience the intense 'Squid Games'. Outlast opponents in the traffic light game for thrilling 
            player vs player rewards. Can you make it to the end?
        `,
        active: false,
    },
];