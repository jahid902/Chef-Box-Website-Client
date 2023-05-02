import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        console.log(name, email, image, password);
        form.reset()
    }

    return (
        <div className="hero min-h-screen bg-base-200 font-serif">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                Already have an account?
                <Link
                  to="/login"
                  className="label-text-alt text-blue-600 font-bold text-base link link-hover"
                >
                  Login here
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-common">Register</button>
            </div>
          </form>
          <div className="flex gap-2 justify-center items-center border-2 border-yellow-600 p-1 cursor-pointer">
            <p>Sign in with google </p>
            <img src="../../public/google.png" className="w-6 h-6" alt="" />
          </div>         
          <p className="mx-auto">or</p>
          <div className="flex gap-2 justify-center items-center border-2 border-black p-1 cursor-pointer mb-3">
            <p>Sign in with Github </p>
            <img src="../../public/github.png" className="w-6 h-6" alt="" />
          </div> 
        </div>
      </div>
    </div>
    );
};

export default RegisterPage;