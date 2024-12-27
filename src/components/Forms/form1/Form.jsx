import React from 'react';
import './form.css';

const Form = () => {
    return (
    <>
      <div className='form'>
            <form action="/submit" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="message">Message:</label>
                <textarea className='min-h-[4em] max-h-[6em]' id="message" name="message" placeholder="Enter your message" rows="4"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
    );
};

export default Form;