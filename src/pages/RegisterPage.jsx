import React from "react";
import { Link } from "react-router-dom";
import { register } from "../redux/authOperations";
import LeftSide from "../components/LeftSide";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="container flex bg-black">
      <LeftSide />
      <div className="flex w-1/2 flex-col px-6 mt-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-left text-2xl text-secondary">Sign Up</h2>
          <p className="text-xs text-gray-500 text-left my-6">
            Step into a world of hassle-free expense management! Your journey
            towards financial mastery begins here.
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                className="block w-full rounded-md border py-2 pl-2 my-6 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="block w-full rounded-md border py-2 pl-2 my-4 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                className="block w-full rounded-md border py-2 pl-2 mt-4 mb-8 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />

              <div className="text-left mt-16">
                <button
                  type="submit"
                  className="bg-primary rounded-full px-7 py-2 text-left"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-left mt-4">
            Already have account?{" "}
            <Link to="login" type="Link">
              <span className="underline">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
