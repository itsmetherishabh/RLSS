import React from 'react'

const Enroll = () => {
    return (
        <div>
            <div className="container" style={{minHeight:'35rem', border:"3px solid black",borderRadius:"25px", margin: '45px auto'}}>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm p-4 text-center" style={{height:'34.8rem', borderRight:"3px solid black",borderRadius:"25px"}}>
                        <h2>JOIN OUR TEAM</h2>
                        <p>It's time to sav eforest to save the world. Be with us to make a healthy environment for the future generation.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm m-4">
                        <h3>Create New Account</h3>
                        <form>
                            <input type="text" style={{border:'0', borderBottom:"1px solid black"}} className="" placeholder="Full Name" /><br />
                            <input type="email" style={{border:'0', borderBottom:"1px solid black"}} className="" placeholder="Email" /><br />
                            <input type="password" style={{border:'0', borderBottom:"1px solid black"}} className="" placeholder="Password" /><br />
                            <input type="checkbox" style={{border:'0', borderBottom:"1px solid black"}} className="" placeholder="" />I agree<br />
                            <button type="submit" className="btn btn-dark">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enroll
