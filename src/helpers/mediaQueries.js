import { WIDTH } from "./mediaQueriesValue";


const generateMediaQueries = (width) => (cssStyles) =>
    `
        @media only screen and (min-width: ${width}px) {
           ${cssStyles}
        }
    `;

const mediaQueries = {
    landscapePhone: (cssStyles) =>
        `
            @media only screen and (max-height: 414px) and (min-width: ${WIDTH.tablet}px) {
               ${cssStyles}
            }
        `,
    largePhone: generateMediaQueries(WIDTH.largePhone),
    tablet: generateMediaQueries(WIDTH.tablet),
    laptop: generateMediaQueries(WIDTH.laptop),
    desktop: generateMediaQueries(WIDTH.desktop),
};

export default mediaQueries;
