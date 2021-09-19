import React from 'react'

const Contact = () => {
  return (
    <div className="min-vh-100">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center pt-5">Want to work with me?</h1>
        <h1 className="text-center">Let's have a talk</h1>
        <div className="bg-primary mt-5 p-5 text-white text-center rounded-circle">
          <p>raj mangukiya</p>
          <p>+91 9023460453S</p>
          <p>rajmangukiya00@gmail.com</p>
          <p>surat, gujarat, india</p>
        </div>
        <form className="contact-form d-flex flex-column m-5 align-items-center" action="#">
          <input className="mt-4 rounded-pill px-3 py-1 w-100" placeholder="full name" type="text" />
          <input className="mt-4 rounded-pill px-3 py-1 w-100" placeholder="email" type="text" />
          <textarea className="mt-4 px-3 py-3 w-100" placeholder="your requirment or query" style={{borderRadius: '20px'}} />
          <div className="bg-primary px-5 py-2 text-light m-4 rounded-pill" style={{cursor: 'pointer'}}>
            Submit
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
