import React, { useState } from 'react';
import Button from '../UI/button/Button.module.css'; // Assuming Button is a CSS module

export const Home = () => {
    const [showHome, setShowHome] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div>
            
            <button onClick={() => { setShowHome(true); setShowAbout(false); setShowContacts(false); }} className={Button.button2}>Home</button>
            <button onClick={() => { setShowHome(false); setShowAbout(true); setShowContacts(false); }} className={Button.button2}>About</button>
            <button onClick={() => { setShowHome(false); setShowAbout(false); setShowContacts(true); }} className={Button.button2}>Contacts</button>
            {showHome && <p>Home</p>}
            {showAbout && <p>About</p>}
            {showContacts && <p>Contacts</p>}
        </div>
    );
};
