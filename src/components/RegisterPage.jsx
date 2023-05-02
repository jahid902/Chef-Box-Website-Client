import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(
        "Password should be Minimum six characters, at least one letter and one number"
      );
      return;
    }

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully created user")
      })
      .catch((error) => {
        console.log(error.message);
        setError("User not created");
      });
      form.reset();
      setError("");
      setSuccess("");
  };

  return (
    <div className="hero min-h-screen bg-base-200 font-serif">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
            <p className="text-red-700 text-lg">{error}</p>
            <p className="text-green-500 text-lg">{success}</p>
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
