import React from 'react'

const Commerce = () => {
    return (
        <div class="container my-2">
            <form method="post" action="/commerce">
                <label htmlFor="q1">Q1. What is commerce?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q2. Write a difference between accounting and accountancy?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q3. What is demand and supply curve?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q4. How many departments in Commerce mainly divided into?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q1">Q5. What do you mean by journal ledger?</label>
                <input type="text" className="form-control my-2" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg mt-2" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Commerce
