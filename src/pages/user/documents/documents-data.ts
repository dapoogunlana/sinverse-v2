import { WhitePaper, Doc1, Doc2 } from "../../../assets/files";
import { LogoRed } from "../../../assets/images/new";


export const documentList = [
    {
        name: 'Whitepaper',
        image: LogoRed,
        link: WhitePaper,
        overview: 'SinVerse White Paper',
        info: `Underlying technology details, token economics and team profile`,
        downloadable: true,
    },
    {
        name: 'Document 1',
        image: LogoRed,
        link: Doc1,
        overview: 'SinVerse Metaverse Map',
        info: `To be released soon`,
        downloadable: false,
    },
    {
        name: 'Document 2',
        image: LogoRed,
        link: Doc2,
        overview: 'How to Navigate SinVerse',
        info: `To be released soon`,
        downloadable: false,
    },
];