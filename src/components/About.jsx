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
                    <br/>
                    <br/>
                    My main skillset is in web development technologies, namely HTML, CSS, and JavaScript. 
                    I'm also knowledgeable about back-end materials like Node.JS, Mongoose, and SQL. Others skills
                    include object-oriented programming, Express, and Git/Version Control.
                    <br/>
                    <br/>
                    Email: jlouis2016@gmail.com <br/>
                    Cell: 321-318-9857
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