import Button from './Button'
const Showcase = () => {
    return (
        <div className='showcase'>
            <div className="showcase-wrapper">
                <div className="text-box">
                    <h1>A simple bookmark manager</h1>
                    <p>a clean and simple interface to organize all your favourite websites. Open a new browser tap to see your sites load instantly. Try it for free</p>
                    <div className="button-wrapper">
                    <button className="btn btn-hover">Get it on Chrome</button>
                    <button className="btn btn-hover btn-firefox">Get it on Firefox</button>
                        
                        {/* <Button text ="Get it on Chrome" color ="#0a33e7" textColor="#fff" />
                        <Button text ="Get it on Firefox" color ="#fff" textColor="#0a33e7" /> */}
                    </div>
                </div>
                <div className="img-box">
                    <div className="img-div">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Showcase
