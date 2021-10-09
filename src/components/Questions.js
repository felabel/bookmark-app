import Button from './Button'
const Questions = () => {
    return (
        <div id="questions">
            <div className="questions-wrapper">
                <div className="questions-text">
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.</p>
                </div>
                <div className="question">
                  
                    <div className="single-question">
                        <span>What is Bookmark?</span><span className="arrow"> arrow</span>
                        <div className="question-dropdown">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor itaque eos vel neque ut recusandae. Aut dolorem magnam minima adipisci provident ipsa libero! Iusto quidem non minima eos asperiores.</span>
                        </div>
                    </div>
                    <div className="single-question">
                        <span>How can I request a new browser?</span><span className="arrow"> arrow</span>
                        <div className="question-dropdown">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor itaque eos vel neque ut recusandae. Aut dolorem magnam minima adipisci provident ipsa libero! Iusto quidem non minima eos asperiores.</span>
                        </div>
                    </div>
                    <div className="single-question">
                        <span>Is there a mobile app?</span><span className="arrow"> arrow</span>
                        <div className="question-dropdown">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor itaque eos vel neque ut recusandae. Aut dolorem magnam minima adipisci provident ipsa libero! Iusto quidem non minima eos asperiores.</span>
                        </div>
                    </div>
                    <div className="single-question">
                        
                        <span>What about other chromium browsers?</span><span className="arrow"> arrow</span>
                        <div className="question-dropdown">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor itaque eos vel neque ut recusandae. Aut dolorem magnam minima adipisci provident ipsa libero! Iusto quidem non minima eos asperiores.</span>
                        </div>
                    </div>
                    <div className="btn-div">
                    <Button text ="More Info" color ="#0a33e7" textColor="#fff" />
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Questions
