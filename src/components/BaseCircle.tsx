import styled from "styled-components";
import { COMPOSITION_CONFIG } from '../config'

type CircleProps = {
    top: number,
    left: number,
    scale: number,
}

const { CIRCLE } = COMPOSITION_CONFIG

export const BaseCircle = styled.div<CircleProps>`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: 715px;
    height: 715px;
    border-radius: 50%;
    background-color: ${CIRCLE.BACKGROUND_COLOR};
    transform: scale(${props => props.scale});
    box-shadow: inset 0px 34px 34px rgba(255, 255, 255, 0.25);
`