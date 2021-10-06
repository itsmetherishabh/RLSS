import React from 'react'

const Science = () => {
    return (
        <div>
            <form method="post" action="/science">
                <label htmlFor="q1">Q1. What do you meant by Science?</label>
                <input type="text" className="form-control" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q2. What do you understand by Newton's third law of motion?</label>
                <input type="text" className="form-control" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q3. Explain law of thermodynamics?</label>
                <input type="text" className="form-control" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q4. What is gravitation and floatation?</label>
                <input type="text" className="form-control" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q5. ?</label>
                <input type="text" className="form-control" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg" type="submit">SUBMIT</button>
            </form>

        </div>
    )
}

export default Science
