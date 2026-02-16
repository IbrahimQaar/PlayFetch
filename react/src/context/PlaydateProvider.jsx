import { useState } from "react";
import { PlaydateContext } from "./PlaydateContext";

export default function PlaydateProvider ({children}) {
    const [playdate, setPlaydate] = useState()

    return(
        <PlaydateContext.Provider value = {{ playdate, setPlaydate}}>
            {children}
        </PlaydateContext.Provider>
    )
}