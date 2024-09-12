import { useState, useRef, useEffect } from "react";
import Connect from "./modules/Connect";
import ConnectForJokes from "./modules/ConnectForJokes";




export default function Jokes(){

    const [showJoke, setShowJoke] = useState(true);
    const handleJokes = () => {
        setTimeout(3500);
        setShowJoke(false);
    }

    const countryRef = useRef(null);
    const messagesRef = useRef(null);

    useEffect(() => {
        ConnectForJokes({messagesRef}, setShowJoke);
    }, [])
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowJoke(false)
        }, 3500);
        return () => clearTimeout(timeOut);
    })
    
    

    return (
        <>
            <div className="flex w-full h-full justify-center items-center">
            {showJoke ? 
            
                <div className="flex  border-4 justify-center items-center h-36 w-96" ref={messagesRef}></div>
        
             : <div className="hidden" ref={messagesRef}></div>}
             </div>
        </>
    )

}
