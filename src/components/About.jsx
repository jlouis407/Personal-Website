import React from "react";

function About(){
    return(
        <div className="row" id="about-div">
            <div className="column" id="about-text">
                <h1 className="about-h1">My name is Josiah Louis</h1>
                <p className="about-p">
                    I am a recent graduate of Valencia College (Orlando, Florida). I have a 
                    Bachelor of Applied Science in Computing Technology & Software Development.
                    I'm very eager to put my education to use in a productive tech career.
                </p>
            </div>
            <div class="column">
                <img 
                    className="josiah-img"
                    src="/images/50351780_00101_0205_Large.jpg"
                    alt="epcot-img"
                />

            </div>
        </div>
    )
}

export default About;