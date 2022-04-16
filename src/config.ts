const FPS = 30;
const VIDEO_DURATION_IN_SECONDS = 10;
const VIDEO_DURATION_IN_FRAMES = VIDEO_DURATION_IN_SECONDS * FPS;
const VIDEO_WIDTH = 1080;
const VIDEO_HEIGHT = 1920;
const VIDEO_ID = 'Crypto'

export const VIDEO_CONFIG = {
    FPS,
    VIDEO_DURATION_IN_FRAMES,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    VIDEO_ID
}

export const APP_CONFIG = {
    CRYPTO_API_KEY: ''
}

export const COMPOSITION_CONFIG = {
    VIDEO: {
        BACKGROUND_COLOR: '#281452',
        NUMBER_BACKGROUND_COLOR: 'rgba(52, 30, 99, 0.68)'
    },
    CIRCLE: {
        BACKGROUND_COLOR: '#221145'
    },
    TEXT: {
        FONT_SIZE: {
            LARGE: '72px',
            EXTRA_LARGE: '2000px'
        },
        COLOR: {
            INTRO: 'linear-gradient(#E32453,#9565FA)',
            RATES: '#00FF66',
            NAME_CRYPTO: '#7867B9',
            NUMBER: '#000000'
        },
        ACCENT: {
            MEDIUM: '500'
        },
        FONT_FAMILY: {
            STANDART: 'Rajdhani',
            NAME_CRYPTO: 'Poppins'
        }
    }
}