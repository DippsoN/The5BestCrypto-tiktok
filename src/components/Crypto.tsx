import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { Presentation } from '../sequences/Presentation'


export const Crypto: React.FunctionComponent = () => {

    const { fps } = useVideoConfig()
    
    return (
        <Sequence
            from={0}
            durationInFrames={10 * fps}
            name="ProjectCrypto"
        >
            <Presentation />
        </Sequence>
    )
};
