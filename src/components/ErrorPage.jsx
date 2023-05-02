import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src="https://media.istockphoto.com/id/941715768/photo/red-screen-with-code-and-inscription-error.jpg?s=612x612&w=0&k=20&c=abr3bsYCMSaq0up_T6QSvKtfF-cq9N0O2oV9kM3HLhQ="
          alt="error image"
          className="w-96 h-64"
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 mt-4 font-extrabold text-6xl text-red-500">
            <span>Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-500 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn btn-error">
            Take me home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
