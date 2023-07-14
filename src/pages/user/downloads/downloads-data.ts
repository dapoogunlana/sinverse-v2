import { WhitePaper } from "../../../assets/files";
import {
    DownloadVersion2_70,
    DownloadVersion1_90,
    DownloadVersion1_87,
    DownloadVersion1_84,
    DownloadVersion1_83,
    DownloadVersion1_80,
    DownloadVersion1_66,
    DownloadVersion1_56,
    DownloadVersion1_22,
} from "../../../assets/images/new";


export const downloadList = [
    {
        version: 'Build Version 2.70',
        image: DownloadVersion2_70,
        section: [
            {
                points: [
                    {
                        note: `CSafe Usage (1 safe for 1 land): This feature will be available once the Marketplace goes live. Users will be able to safely utilize their land through the implementation of a 1:1 safe ratio.`,
                        subPoints: []
                    },
                    {
                        note: `Material Shop: The inventory section now includes functionality for purchasing materials. Users can easily acquire materials through this feature.`,
                        subPoints: []
                    },
                    {
                        note: `Drug Dealer Update: The Drug Dealer feature has been updated to include the shield peddler. This shield peddler provides users with protection for approximately 1 minute, enhancing their gameplay experience.`,
                        subPoints: []
                    },
                    {
                        note: `Pistol for 0.5 Gold: All users will now start with one pistol. They have the option to drop it and subsequently purchase additional pistols for 0.5 Gold each.`,
                        subPoints: []
                    },
                    {
                        note: ` Happy Hours Implementation: Random happy hours will now be automatically set from the server on a daily basis. These happy hours are currently set at a 2X multiplier.`,
                        subPoints: []
                    },
                ]
            }
        ],
        link: 'https://sinverse.com/get/Sinverse.exe',
    },
    {
        version: 'Build Version 1.98',
        image: DownloadVersion2_70,
        section: [
            {
                points: [
                    {
                        note: `Crowbar Damage Updates- 4-5 hits`,
                        subPoints: []
                    },
                    {
                        note: `Respawning immunity for 5 sec.`,
                        subPoints: []
                    },
                    {
                        note: `Gun Shop Deployment in all cities.`,
                        subPoints: []
                    },
                    {
                        note: `Build Mode Correction - users can build and see players buildings.`,
                        subPoints: []
                    },
                    {
                        note: `Run is set by default, to toggle walking press shift.`,
                        subPoints: []
                    },
                    {
                        note: `Anticheat implementation against autoclickers and any third party cheating apps - Users caught cheating will be disqualified from competitions.`,
                        subPoints: [],
                    },
                ]
            }
        ],
        link: 'https://sinverse.com/get/Sinverse.exe',
    },
    {
        version: 'Build Version 1.87',
        image: DownloadVersion1_87,
        section: [
            {
                points: [
                    {
                        note: `Four New Cities Integrated with NPC, Drug Dealer, Emoticons, Event Icon:`,
                        subPoints: [
                            'SinCity Centre',
                            'Red Light District',
                            'Favelas City',
                            'Fashion District',
                        ],
                        disclaimer: 'Note: Build mode is active in the SinCity Centre and Red Light District.'
                    },
                    {
                        note: `Emoticons Functionality: Emoticons were added in all 8 cities currently active on SinVerse.`,
                        subPoints: [],
                        disclaimer: 'Note: Emoticons popup will appear in the game when a player will press "Tab"'
                    },
                    {
                        note: `Dynamic Character customisation functionality (single player): Players can customise their character’s look and feel by changing hair type, eye color, adjusting ageing, skin tone, and attire like top wear, bottom wear, and shoes.`,
                        subPoints: [],
                        disclaimer: 'Note: Player will find the character customisation option on the character selection screen.'
                    },
                    {
                        note: `Drug Dealer Female character`,
                        subPoints: []
                    },
                    {
                        note: `Challenge feature: The event Icon will display in all 8 cities: when clicking on the Event Icon, player will enrolled in weekly challenges, competing for SIN prizes`,
                        subPoints: []
                    },
                    {
                        note: `Inventory is Accessible now.`,
                        subPoints: [],
                        disclaimer: 'Default Inventory: 2 Weapons & 1 Melee.'
                    },
                    {
                        note: `Shop Functionality integrated: Tradable ammunition and weapons in China Town using SIN Coins; Location:- Shooting Range`,
                        subPoints: []
                    },
                ]
            }
        ],
        link: 'https://sinverse.com/get/Sinverse.exe',
    },
    {
        version: 'Build Version 1.84',
        image: DownloadVersion1_84,
        section: [
            {
                points: [
                    {
                        note: `Pick and Drop mission bugs fixed`,
                        subPoints: []
                    },
                    {
                        note: `The Strip: UI has been improved`,
                        subPoints: []
                    },
                    {
                        note: `The Strip: Buildings are inconsistent when zoomed in - Consistency has been maintained now`,
                        subPoints: []
                    },
                    {
                        note: `The Strip: The LODs in the Strip, with max quality control at 5 - Fixed.`,
                        subPoints: []
                    },
                    {
                        note: `Shooting Spawned point missing - Fixed.`,
                        subPoints: []
                    },
                    {
                        note: `The packet is not loaded in the vehicle when the player enters the pick & drop game just after the multiplayer shooting range - Fixed.`,
                        subPoints: []
                    },
                ]
            }
        ],
        link: 'https://sinverse.com/get/Sinverse.exe',
    },
    {
        version: 'Build Version 1.83',
        image: DownloadVersion1_83,
        section: [
            {
                label: 'Chat/Voice Functionality',
                points: [
                    {
                        note: `Text Chat: Text chat is global. All players in the game can use it to interact with other player in the same game play. Note: Press "V" button to open chat panel.`,
                        subPoints: []
                    },
                    {
                        note: `Voice Chat Feature: Through Voice chatting feature, players can interact with each other via audio chat.`,
                        subPoints: [],
                        disclaimer: 'Note: Voice chat features works for the limited range or shorter distance between the players.'
                    },
                ]
            },
            {
                label: 'Shooting Range Online multiplayer Mini Game',
                points: [
                    {
                        note: `There is an enrolment point near the shooting range.`,
                        subPoints: []
                    },
                    {
                        note: `Players can find it through the mini map.`,
                        subPoints: []
                    },
                    {
                        note: `Max 5 players can play in Shooting mini game at a time.`,
                        subPoints: []
                    },
                ]
            },
            {
                label: 'Drug Dealer Feature',
                points: [
                    {
                        note: `Players can buy drugs for health from Drug dealer`,
                        subPoints: []
                    },
                    {
                        note: `Players can find it in the mini map`,
                        subPoints: []
                    },
                ]
            },
        ],
        link: 'https://www.dropbox.com/s/rc4auoh3lxf6b8d/Sinverse_K.1.83.rar?dl=0',
    },
    {
        version: 'Build Version 1.80',
        image: DownloadVersion1_80,
        section: [
            {
                label: 'Master client is updated when the app goes in the background in order to enhance the playing experience',
                points: []
            },
            {
                label: 'For Squid Game, the respawning point has been set near enrolling point',
                points: []
            },
            {
                label: 'By default EU has been set on the server side',
                points: []
            },
        ],
        link: 'https://www.dropbox.com/s/zk8jq1vt40bkfpb/Sinverse_K.1.80.rar?dl=0',
    },
    {
        version: 'Build Version 1.66',
        image: DownloadVersion1_66,
        section: [
            {
                label: 'Squid game integrated. Players can find it on map.',
                points: []
            },
            {
                label: 'The strip district with NPC integrated',
                points: []
            },
            {
                label: 'Shooting range Leader board issues fixed',
                points: []
            },
            {
                label: 'Shooting range Collider issues fixed',
                points: []
            },
            {
                label: 'Shooting range: bullets updated to 500',
                points: []
            },
            {
                label: 'Shift button functionality implemented for run',
                points: []
            },
        ],
        link: 'https://www.dropbox.com/s/h5vo5x259h2pinr/Sinverse_K.1.66.rar?dl=0',
    },
    {
        version: 'Build Version 1.56',
        image: DownloadVersion1_56,
        section: [
            {
                label: 'More Stable experience in Pick and Drop driving (Mini Game).',
                points: []
            },
            {
                label: 'Improved and Stable NPC in The Hill & Silicon Valley.',
                points: []
            },
            {
                label: 'Character Selection Swapped for better experience with New Female Char.',
                points: []
            },
            {
                label: ' Quality control shifted in the Menu tab.',
                points: []
            },
            {
                label: 'In Place of "X", player can use "M" for better and improved version of Mini-Map.',
                points: []
            },
        ],
        link: 'https://www.dropbox.com/s/h5vo5x259h2pinr/Sinverse_K.1.66.rar?dl=0',
    },
    {
        version: 'Build Version 1.22',
        image: DownloadVersion1_22,
        section: [
            {
                label: 'Build Functionality added for plot owners:',
                points: []
            },
            {
                label: 'Plot Owner can Login and Attach MetaMask ID to the game.',
                points: []
            },
            {
                label: 'Plot Owner can see his/her plots on the mini-map to find out the plot location',
                points: []
            },
            {
                label: 'When player move to \'Build Mode\', the Purchased Plot Icon changes so that build mode can be identified easily',
                points: []
            },
            {
                label: 'Buildings created are saved on the server when player closes the build functionality',
                points: []
            },
            {
                label: 'NPC behaviour Implemented',
                points: []
            },
        ],
        link: WhitePaper,
    },
];