import { BaseCircle } from "./index";


export const Circles: React.FunctionComponent = () => {
    
    const CircleList = [
        {
            top: -130,
            left: -133,
            scale: 1,
        },
        {
            top: 1423,
            left: 370,
            scale: 1,
        },
        {
            top: 1535,
            left: 0,
            scale: .4,
        },
        {
            top: 1532,
            left: 13,
            scale: .2,
        },
    ]

    return (
        <>
            {CircleList.map(item => 
                <BaseCircle 
                top={item.top}
                left={item.left}
                scale={item.scale}
                />
            )}
        </>
    )
};
