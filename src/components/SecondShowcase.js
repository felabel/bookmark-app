import Button from './Button'
const SecondShowcase = () => {
    return (
        <div className='second-showcase'>
            <div className="second-showcase-wrapper">
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
    )
}

export default SecondShowcase
