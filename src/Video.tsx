import {Composition} from 'remotion';
import { Crypto } from './components';
import { VIDEO_CONFIG } from './config';

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID
	} = VIDEO_CONFIG

	return (
		<Composition
			id={VIDEO_ID}
			component={Crypto}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
		/>
	);
};
