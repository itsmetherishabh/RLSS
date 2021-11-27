// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './css/DataForm.css';
import bgEnroll from "../images/bgEnroll.jpg";

const initNewUser = {
  name: "",
  email:"",
  phone:"",
  gender:"",
  dob:""
}

const DataForm = () => {
  const [newUser, setNewUser] = useState(initNewUser);
  const [users, setUsers] = useState([]);


  const onChange = ({ target : {name, value}}) => {
    setNewUser({...newUser, [name] : value});
    console.log(newUser);
  };

  const submitUser = (e) => {
    e.preventDefault();
    try{
      setNewUser(newUser);
      setUsers([...users, newUser]);
      console.log(users);
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className= "p-4 dataForm_Content" style = {{minHeight: "40rem", backgroundImage: `url(${bgEnroll})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <div className='container p-4 mx-3' style = {{maxWidth: "40rem", float: "left",border:"2px solid white", borderRadius:"5px"}}>
        {/* <div> <img src={bgEnroll} style={{maxHeight:"500px"}}/> </div>  */}
        <h2>Enroll Yourself</h2>  
        <form onSubmit={submitUser} method="post" action="/enroll" className="mt-2">
          <label className='' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control my-2'
            id='name'
            placeholder='enter your name'onChange={onChange} 
          />
          <label className='' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='form-control my-2'
            id='email'
            placeholder='name@example.com'onChange={onChange} 
          />
          <label className='' htmlFor='phone'>
            Phone
          </label>
          <input
            type='number'
            name='phone'
            className='form-control my-2'
            id='phone'
            placeholder='enter your phone number'onChange={onChange} 
          />
          <label className='' htmlFor='gender'>
            Gender
          </label>
          <div className='form-check mt-2' id='gender'>
            <input
              className='form-check-input'
              type='radio'
              name='gender'
              id='male'
            />
            <label className='form-check-label' htmlFor='male'>
              Male
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='gender'
              id='female'
            />
            <label className='form-check-label' htmlFor='female'>
              Female
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='gender'
              id='other'
            />
            <label className='form-check-label mb-2' htmlFor='other'>
              Other
            </label>
          </div>
          <label className='' htmlFor="dob">Date of Birth</label>
          <input type='date' name="dob" className='form-control my-2' id="dob" style={{maxWidth:"200px"}} onChange={onChange} />
          <button type='submit' className='btn btn-primary my-2'>SUBMIT</button>
        </form>
        Already Member? <Link to="/login" style={{color:"#fff", textDecoration:"none"}}>LOGIN</Link>
      </div>
    </div>
  );
};

export default DataForm;
