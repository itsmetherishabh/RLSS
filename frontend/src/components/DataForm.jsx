import React from "react";

const DataForm = () => {
  return (
    <div className='px-2 py-4'>
      <div className='container'>
        <h2>Enroll Yourself</h2>  
        <form method='post' className="mt-2">
          <label className='' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control my-2'
            id='name'
            placeholder='enter your name'
          />
          <label className='' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='form-control my-2'
            id='email'
            placeholder='name@example.com'
          />
          <label className='' htmlFor='phone'>
            Phone
          </label>
          <input
            type='number'
            name='phone'
            className='form-control my-2'
            id='phone'
            placeholder='enter your phone number'
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
              checked
            />
            <label className='form-check-label' for='male'>
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
            <label className='form-check-label' for='female'>
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
            <label className='form-check-label mb-2' for='other'>
              Other
            </label>
          </div>
          <label className='' htmlFor="dob">Date of Birth</label>
          <input type='date' name="dob" className='form-control my-2' id="dob" style={{maxWidth:"200px"}} />
          <button type='submit' className='btn btn-primary my-2'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
