import { useState, useRef, useEffect } from "react";

import ConnectForJokes from "./modules/ConnectForJokes";




export default function Heyhey(){

    
   

    const countryRef = useRef(null);
    const messagesRef = useRef(null);

    useEffect(() => {
        
        ConnectForJokes({messagesRef});
        
        
    }, [])
    

    const [countryOffset, setCountryOffset] = useState();

    return (
        <>
            <h1>WebSocket Messages</h1>
            <label >Choose a country:</label>

            <select ref={countryRef} onClick={() => sendOffset(countryRef)}>
                <option value="0">Lithuania</option>
                <option value="2">Germany</option>
                <option value="9">Japan</option>
                <option value="-9">New York</option>
                
            </select>
            <div ref={messagesRef}></div>
        </>
    )

}
function sendOffset(countryRef) {
    
    stompClient.send("/app/hello", {}, JSON.stringify({'name': countryRef.current.value}));
}
