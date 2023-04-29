

import {
    LandsPrivate,
    LandsDistrict,
    LandsPublic,
    LandsRoads,
    LandsDistrictOwnership,
    LandsLicences,
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
    // {
    //     name: 'District Lands',
    //     image: LandsDistrict,
    //     info: `
    //         District lands in SINverse are owned and managed by groups of players who have formed districts. These lands can be used for various purposes, including communal activities, business operations, or cultural events. The importance of district lands lies in the fact that they provide a means for players to come together and collaborate on shared goals, while also promoting the diversity of the game world through the creation of unique districts with distinct cultural identities.
    //     `,
    //     active: false,
    // },
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
    {
        name: 'Districts & Land ownership',
        image: LandsDistrictOwnership,
        info: `
            Welcome to SinVerse, a metaverse with 17 unique districts and 15 plots of land, each offering a distinct environment for your virtual world. As a player, you can acquire land through gameplay or direct purchases on the marketplace. Each plot has its own characteristics, allowing you to farm in-game items, construct buildings and build businesses. You can choose from high-security zones for complete safety to zero-security zones with high rewards but no rules or safety. SinVerse's land ownership provides a range of benefits, from earning rewards to creating passive income-generating businesses.
        `,
        active: false,
    },
    {
        name: 'Business Licences',
        image: LandsLicences,
        info: `
            Operating a business in SinVerse is a vital aspect of the game, and as a landowner, you can obtain premium or exclusive business licenses in the form of NFTs to create businesses that generate real passive income. The possibilities are endless, from virtual pet shops to casinos. You can also lease your land and businesses to fellow gamers and benefit from profit-sharing agreements. Business licenses in SinVerse provide a unique opportunity to earn rewards and contribute to the ecosystem's growth.
        `,
        active: false,
    },
];