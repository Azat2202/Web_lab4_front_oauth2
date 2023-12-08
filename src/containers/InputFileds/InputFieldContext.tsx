import React, {ReactNode, useState} from "react";

export interface Coordinates {
    x: number,
    y: string,
    r: number
}


export interface CoordinatesStore{
    getX: number,
    getY: string,
    getR: number,
    setX: (x: number) => void,
    setY: (y: string) => void,
    setR: (r: number) => void,
}
export const StoreContext = React.createContext<CoordinatesStore | null>(null)

export const CoordinatesProvider = ({children}: {children: ReactNode}) => {
    const [getCoordinates, setCoordinates] = useState<Coordinates>({
        x: -2,
        y: "-2",
        r: 1
    });

    const updateX = (newX: number) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            x: newX,
        }));
    };

    const updateY = (newY: string) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            y: newY,
        }));
    };

    const updateR = (newR: number) => {
        setCoordinates((prevCoordinates) => ({
            ...prevCoordinates,
            r: newR,
        }));
    };

    const store = {
        getX: getCoordinates.x,
        getY: getCoordinates.y,
        getR: getCoordinates.r,
        setX: updateX,
        setY: updateY,
        setR: updateR
    }

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}