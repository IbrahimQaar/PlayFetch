import { createContext } from "react";

export const PlaydateContext = createContext({
    playdate: null,
    setPlaydate: () => {},
});