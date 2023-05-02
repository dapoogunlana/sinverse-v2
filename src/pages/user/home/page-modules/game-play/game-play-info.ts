

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
            Embedded across many districts in SinVerse is the ability of gamers to take advantage of the play and earn model 
            that forms just a small part of the metaverse game. Players who want to have fun have multiple exciting mini-games 
            to choose from. The experience is usually rewarding as they grind through and earn at the same time. Use your map 
            to guide you to the nearest mini-game in your district.
        `,
        active: false,
    },
    {
        name: 'Pick & Drop',
        image: GameplayImgPickDrop,
        video: GameplayVidPickDrop,
        info: `
            In China Town, discover the parcel pick-up and delivery quest. Earn daily rewards of Gold SIN coins for successful 
            participation in parcel drops!
        `,
        active: false,
    },
    {
        name: 'Shooting Range',
        image: GameplayImgShootingRange,
        video: GameplayVidShootingRange,
        info: `
            Visit China Town's shooting range for a thrilling challenge! Test your aim in single player or multiplayer mode, 
            hitting as many targets as possible within time limits for a chance to win lucrative prizes.
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