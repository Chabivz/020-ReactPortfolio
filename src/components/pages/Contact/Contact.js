import React from 'react';
import './index.css'
export default function Contact() {
  return (
    <div className='container'>
      <div className='form'>
      <h1>Contact Page</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Rey Misterio" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  );
}
