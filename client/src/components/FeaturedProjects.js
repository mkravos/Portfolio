import background from "../assets/SplashBackground.jpg";
import React, {useState} from "react";
import { isMobile } from "react-device-detect";
import Profile from "./Profile";

export default function FeaturedProjects() {
    const [renderProfile, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);
    
    if(!renderProfile) {
        if(!isMobile) {
            return (
                <header className="App-header Content-page">
                    <div className="Location-bar">
                        <img className='Location-bar-background' alt='background' src={background}/>
                        <button className="Back-btn-desktop" onClick={onShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <div className="location">Projects</div>
                    </div>
                </header>
            );
        } else {
            return (
                <header className="App-header Content-page">
                    <div className="Location-bar">
                        <img className='Location-bar-background' alt='background' src={background}/>
                        <button className="Back-btn-mobile" onClick={onShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                        <div className="location">Projects</div>
                    </div>
                </header>
            );
        }
    } else {
        return (
            <Profile/>
        );
    }
}