import React, {useState} from 'react';
import Home from "./Home";

export default function Welcome() {
    const [renderHome, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);

    if(!renderHome) {
        return (
            <header className="App-header Welcome-page">
                <h1>Maj Kravos</h1>
                <p>Hi, I am Maj.</p>
                <button onClick={onShow}>Enter Site</button>
            </header>
        );
    }
    else {
        return(
            <Home/>
        );
    }
}