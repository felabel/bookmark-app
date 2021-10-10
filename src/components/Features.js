import React from 'react'
import Button from './Button'


const Features = () => {
    return (
        <div id='features'>
            <div className="features">
                <div className="features-text">
                    <h2>features</h2>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bbokmarks sync between your devices so you can access them on the go.</p>

                </div>
                <div className="features-links">

                    <span className="span"><a href="http://">simple booking</a></span>
                    <span className="span"><a href="http://">speedy searching</a></span>
                    <span className="span"><a href="http://">easy sharing</a></span>
                    
                </div>
            </div> 
            
            {/* simple booking features */}
            <div className="second-showcase second-showcase-speedy-booking">
                <div className="second-showcase-wrapper simple-booking">
                    <div className="second-img-box">
                        <div className="second-img-div">
                            
                        </div>
                    </div>
                    <div className="second-text-box">
                        <h2>Bookmark in one click</h2>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <div className="second-button-wrapper">
                            <Button text ="More Info" color ="#0a33e7" textColor="#fff" />
                            
                        </div>
                    </div>
                
                </div>
            </div>
            
            {/* speedy searching features */}
            <div className="second-showcase second-showcase-speedy-searching">
                <div className="second-showcase-wrapper speedy-searching">
                    <div className="second-img-box">
                        <div className="second-img-div speedy-searching-img-div">
                            
                        </div>
                    </div>
                    <div className="second-text-box">
                        <h2>Intelligent search</h2>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <div className="second-button-wrapper">
                            <Button text ="More Info" color ="#0a33e7" textColor="#fff" />
                            
                        </div>
                    </div>
            
                </div>
            </div>

            

            {/* easy sharing features */}
            <div className="second-showcase easy-sharing-second-showcase">
                <div className="second-showcase-wrapper easy-sharing">
                    <div className="second-img-box">
                        <div className="second-img-div easy-sharing-img-div">
                            
                        </div>
                    </div>
                    <div className="second-text-box">
                        <h2>Bookmark in one click</h2>
                        <p> Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <div className="second-button-wrapper">
                            <Button text ="More Info" color ="#0a33e7" textColor="#fff" />
                            
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default Features
