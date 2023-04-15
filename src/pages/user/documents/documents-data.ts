import { WhitePaper, Doc1, Doc2 } from "../../../assets/files";
import { LogoRed } from "../../../assets/images/new";


export const documentList = [
    {
        name: 'Whitepaper',
        image: LogoRed,
        link: WhitePaper,
        overview: 'Sinverse White Paper',
        info: `Underlying technology details, token economics and team profile`,
        downloadable: true,
    },
    {
        name: 'Document 1',
        image: LogoRed,
        link: Doc1,
        overview: 'Sinverse Metaverse Map',
        info: `To be released soon`,
        downloadable: false,
    },
    {
        name: 'Document 2',
        image: LogoRed,
        link: Doc2,
        overview: 'How to Navigate Sinverse',
        info: `To be released soon`,
        downloadable: false,
    },
];