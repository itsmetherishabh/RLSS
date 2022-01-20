import React from 'react'

const Intermediate = () => {
    return (
        <div className="py-3" style={{background:"#B1FFFD",color:"#3F0713",minHeight:"40rem"}}>
            <div className="container">
                <h1>COMPLETED INTERMEDIATE</h1>
                <div className="row">
                    <div className="col-sm bg-light rounded text-dark px-2 mx-2">
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
                    <div className="col-sm bg-light rounded text-dark px-2 mx-2">
                        <h3>Other Options</h3>
                        <ol>
                            <li>Digital Marketting Course.</li>
                            <li>Diploma in Air Hostesses/Flight Steward</li> 
                            <li>Event Management Diploma</li> 
                            <li>Fashion Designing Diploma</li> 
                            <li>S. S. C. (Staff Selection Commision)</li> 
                            <li>Security Forces</li> 
                            <li>R. R. B. (Railway Recruitment Board)</li> 
                        </ol>
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default Intermediate
