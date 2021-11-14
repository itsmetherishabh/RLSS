import React from 'react'

const personality_test = () => {
    return (
        <div className="container my-2">
            <h1>Personality Test</h1>
            <form method="post" action="/personality_test">
                <label htmlFor="q1">Q1. do you like meeting new people?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q2. Do you like solving complex problem?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q3. do you help people only if you think you'd get something in return?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q4.Do you prefer working in a team or on your own?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q5.Do you set up long term goal?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg mt-2" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default personality_test
