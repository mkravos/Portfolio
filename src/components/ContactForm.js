import "./style/ContactForm.css";
import background from "../assets/SplashBackground.jpg";
import React, {useState} from "react";
import { isMobile } from "react-device-detect";
import Profile from "./Profile";

export default function ContactForm() {
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
                        <div className="location">Contact Me</div>
                    </div>
                    <div className="Form-container-mobile">
                        <center>
                            <div className="Contact-header-text">Please reach out to me if you have any comments, questions, concerns, or proposals!</div>
                            <form className="Contact-form">
                                <label htmlFor="sender">Name *</label>
                                <input name="sender" className="Form-input-desktop" type="text" placeholder="Enter your name"></input>
                                <label htmlFor="company">Company</label>
                                <input name="company" className="Form-input-desktop" type="text" placeholder="Enter your company"></input>
                                <label htmlFor="email">Email *</label>
                                <input name="email" className="Form-input-desktop" type="text" placeholder="Enter your email address"></input>
                                <label htmlFor="phone">Phone</label>
                                <input name="phone" className="Form-input-desktop" type="text" placeholder="Enter your phone number"></input>
                                <label htmlFor="message">Message *</label>
                                <textarea name="message" className="Form-input-big-desktop" placeholder="Enter your message to me"></textarea>
                                <div className="Contact-submitBtn-div"><button className="Contact-submitBtn" type="submit">Send Message</button></div>
                            </form>
                        </center>
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
                        <div className="location">Contact Me</div>
                    </div>
                    <div className="Form-container-mobile">
                        <center>
                            <div className="Contact-header-text-mobile">Please reach out to me if you have any comments, questions, concerns, or proposals!</div>
                            <form className="Contact-form">
                                <label htmlFor="sender">Name *</label>
                                <input name="sender" className="Form-input-mobile" type="text" placeholder="Enter your name"></input>
                                <label htmlFor="company">Company</label>
                                <input name="company" className="Form-input-mobile" type="text" placeholder="Enter your company"></input>
                                <label htmlFor="email">Email *</label>
                                <input name="email" className="Form-input-mobile" type="text" placeholder="Enter your email address"></input>
                                <label htmlFor="phone">Phone</label>
                                <input name="phone" className="Form-input-mobile" type="text" placeholder="Enter your phone number"></input>
                                <label htmlFor="message">Message *</label>
                                <textarea name="message" className="Form-input-big-mobile" placeholder="Enter your message to me"></textarea>
                                <div className="Contact-submitBtn-div"><button className="Contact-submitBtn" type="submit">Send Message</button></div>
                            </form>
                        </center>
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