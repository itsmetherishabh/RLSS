import React from 'react'

const formSubmit = (req,res) => {
    const {q1,q2,q3,q4,q5} = req.body;
    console.log(q1);
}

const Commerce = () => {
    return (
        <div className="container my-2">
            <h1>Commerce Test</h1>
            <form method="post" action="/commerce" onSubmit={()=>formSubmit()}>
                <label htmlFor="q1">Q1. What is commerce?</label>
                <input type="text" className="form-control my-2" name="q1" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q2">Q2. Write a difference between accounting and accountancy?</label>
                <input type="text" className="form-control my-2" name="q2" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q3">Q3. What is demand and supply curve?</label>
                <input type="text" className="form-control my-2" name="q3" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q4">Q4. How many departments in Commerce mainly divided into?</label>
                <input type="text" className="form-control my-2" name="q4" placeholder="type your answer" id="q1" required="true" />
                <label htmlFor="q5">Q5. What do you mean by journal ledger?</label>
                <input type="text" className="form-control my-2" name="q5" placeholder="type your answer" id="q1" required="true" />
                <button className="btn btn-warning btn-lg mt-2" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Commerce
