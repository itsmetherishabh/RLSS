import React from 'react'

const humanities = () => {
    return (
        <div class="container my-2">
            <form method="post" action="/humanities">
                <label htmlFor="q1">Q1. what do you understand by humanities?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q2. how do the humanities impact buisness?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q3. what is two-way traffic communication?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q4. what is literary theory?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q5. what is the scope for arts students in future?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg mt-2" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default humanities
