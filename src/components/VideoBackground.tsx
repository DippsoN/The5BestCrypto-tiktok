import styled from 'styled-components'
import { COMPOSITION_CONFIG } from '../config'

const { VIDEO } = COMPOSITION_CONFIG

export const VideoBackground = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${VIDEO.BACKGROUND_COLOR}
`