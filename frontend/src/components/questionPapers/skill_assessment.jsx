import React from 'react'

const skill_assessment = () => {
    return (
        <div class="container my-2">
            <form method="post" action="/commerce">
                <label htmlFor="q1">Q1. Tell us about yourself in 2 sentance?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q2. What does team spirit mean to you?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q3. What is the most difficult change you have encountered in your carrer?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q4. Describe time when you had to solve problem in a crisis?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q5.If your life was a book, what would it be called?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg mt-2" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default skill_assessment
