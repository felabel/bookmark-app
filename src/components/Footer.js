import Button from './Button'
import { ReactComponent as Logo} from './logo-bookmark.svg'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-wrapper">
            <div className="first-footer">
                <div className="first-footer-text">
                   <p className="first-text">35, 000+ ALREADY JOINED</p>
                    <p className="second-text">Stay up-to-date with what we're doing</p>
                </div>
                <form>
                    <input type="text" name="" id="" placeholder="Enter your Email address" />
                    <button value="Contact Us" className="submit-btn">Contact Us</button>
                    {/* <Button text ="Contact Us" color ="deeppink" textColor="#fff" /> */}
                </form>
            </div>
            <div className="second-footer-wrapper">
                <div className="second-footer">
                <div className="footer-left">
                   <div className="footer-logo">
                    <Logo />
                    
                    </div>
                    <div className="footer-links navlinks">
                    <a href = '/features' >features</a>
                    <a href = '/pricing' >pricing</a>
                    <a href = '/contact' >contact</a>
                   
                    
                    </div> 
                    
                </div>
                <div className="footer-right">
                    <span><a href="#">face</a></span>
                    <span><a href="#">twit</a></span>
                 </div>
                
            </div> 
            </div>
           
            </div>
            
        </div>
    )
}

export default Footer
