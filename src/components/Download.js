// import { ReactComponent as Chromelogo} from './LogoChrome.svg'
// import { ReactComponent as Firefoxlogo} from './LogoFirefox.svg'

const Download = () => {
    return (
        <div id='download'>
            <div className="download-text">
            <h3>Download the extension</h3>
            <p>We've got more browsers in the pipeline. Pleae do let us know if you've got a favourite you'd like us to priortize</p>
            </div>
            <div className="download-wrapper">
                {/* chrome card */}
                <div className="card chrome">
                    <div className="img">
                    </div>
                    <div className="description">
                        <p className="heading">Add to Chrome</p>
                        <p>Minimun version 62</p>
                    </div>
                    <div className="dot-svg"></div>
                    <div className="add-btn">
                        <button className="btn btn-hover">Add & install Extension</button>

                    </div>
                </div>
                <div className="card firefox">
                    <div className="img">
                    </div>
                    <div className="description">
                        <p className="heading">Add to Firefox</p>
                        <p>Minimun version 62</p>
                    </div>
                    <div className="dot-svg"></div>
                    <div className="add-btn">
                        <button className="btn btn-hover">Add & install Extension</button>
                        {/* < ButtonHover color="#0a33e7" text="Add & install Extension" textColor="#fff" /> */}
                    </div>
                </div>
                <div className="card opera">
                <div className="img">
                        {/* <img src= "./" alt=""/> */}
                    </div>
                    <div className="description">
                        <p className="heading">Add to 0pera</p>
                        <p>Minimun version 62</p>
                    </div>
                    <div className="dot-svg"></div>
                    <div className="add-btn">
                        <button className="btn btn-hover">Add & install Extension</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
