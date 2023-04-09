

import {
    LandsPrivate,
    LandsDistrict,
    LandsPublic,
    LandsRoads,
} from '../../../../../assets/images/new';

export const landTypesInfo = [
    {
        name: 'Private Lands',
        image: LandsPrivate,
        info: `
            Private lands in SINverse are owned and managed by individual players or entities. These lands can be used for various purposes, including building personal structures or conducting business activities. The importance of private lands lies in the fact that they allow players to establish their own personal and economic identities within the game world. Private lands also provide a means of creating specialized spaces for specific activities, such as housing, farming, or crafting.
        `,
        active: false,
    },
    {
        name: 'District Lands',
        image: LandsDistrict,
        info: `
            District lands in SINverse are owned and managed by groups of players who have formed districts. These lands can be used for various purposes, including communal activities, business operations, or cultural events. The importance of district lands lies in the fact that they provide a means for players to come together and collaborate on shared goals, while also promoting the diversity of the game world through the creation of unique districts with distinct cultural identities.
        `,
        active: false,
    },
    {
        name: 'Public Lands',
        image: LandsPublic,
        info: `
            Public lands in SINverse are owned and managed by the community as a whole, rather than any individual or corporation. These lands can be used by anyone for various purposes, including building structures or organizing events. The importance of public lands lies in the fact that they promote inclusivity and equal opportunity for all players to engage with the game environment. Additionally, public lands can serve as communal gathering places for social interactions, commerce, and other activities. They can also be used as a means of preserving natural resources and fostering environmental awareness within the game.
        `,
        active: false,
    },
    {
        name: 'Government land',
        image: LandsRoads,
        info: `
            Government lands in SINverse are owned and managed by the game's central authority. These lands can be used for various purposes, including building official structures, hosting events, or enforcing game rules. The importance of government lands lies in the fact that they provide a means of establishing a central governing body within the game world, which can promote order, stability, and fairness for all players.
        `,
        active: false,
    },
];