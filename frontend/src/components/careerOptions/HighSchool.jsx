import React from 'react'

const HighSchool = () => {
    return (
        <div className="py-3" style={{background:"#F9D5A7",color:"#3F0713"}}>
            <div className="container">
                <h1>COMPLETED HIGH SCHOOL</h1>
                <div className="row">
                    <div className="col-sm bg-light rounded text-dark px-2 mx-2">
                        <h3>Immediate Options</h3>
                        <ul>
                            <li>Opted For <b>Science</b> Stream</li>
                                <ol>
                                    <li><b>P</b>hysics <b>C</b>hemistry <b>M</b>aths</li>
                                    <li><b>P</b>hysics <b>C</b>hemistry <b>B</b>iology</li>
                                    <li><b>P</b>hysics <b>C</b>hemistry <b>M</b>aths <b>B</b>iology</li>
                                </ol>
                            <li>Opted For <b>Commerce</b> Stream</li>
                                <ol>
                                    <li><b>C</b>ommerce with <b>M</b>aths</li>
                                    <li><b>C</b>ommerce with <b>I</b>nformatics <b>P</b>ractices</li>
                                    <li><b>C</b>ommerce with <b>H</b>indi</li>
                                </ol>
                            <li>Opted For <b>Arts</b> Stream</li>
                        </ul>
                    </div>
                    <div className="col-sm bg-light rounded text-dark px-2 mx-2">
                        <h3>Future Options</h3>
                        <ol>
                            <li>Digital Marketting Course.</li>
                            <li>Diploma in Air Hostesses/Flight Steward</li> 
                            <li>Event Management Diploma</li> 
                            <li>Fashion Designing Diploma</li> 
                        </ol>
                            <h4>(If Opted Science)</h4> 
                        <ol>
                            <li>B. Tech. (Bachelor's in Technology)</li> 
                            <li>B. Sc. (Bachelor's in Science)</li> 
                            <li>B. C. A. (Bachelor's in Computer Application)</li> 
                        </ol>
                            <h4>(If Opted Commerce)</h4> 
                        <ol>
                            <li>B. Com. (Bachelor's in Commmerce)</li>
                            <li>C. A. (Charted Accountant)</li>
                            <li>B. B. A. (Bachelor's of Business Administration)</li> 
                        </ol>
                            <h4>(If Opted Arts)</h4> 
                        <ol>
                            <li>B. A. (Bachelor's of Arts)</li> 
                            <li>B. B. A. (Bachelor's of Business Administration)</li> 
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighSchool
