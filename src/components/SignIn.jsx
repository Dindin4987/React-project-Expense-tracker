import React from "react";
import { Link } from "react-router-dom";
import { signIn } from "../redux/authSlice";
import LeftSide from "./LeftSide";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signIn({
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
          <h2 className="text-left text-2xl text-secondary">Sign In</h2>
          <p className="text-xs text-gray-500 text-left my-8">
            Welcome back to effortless expense tracking! Your financial
            dashboard awaits.
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
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
                className="block w-full rounded-md border py-2 pl-2 mt-4 mb-16 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />

              <div className="text-left mt-28">
                <button className="bg-primary rounded-full px-7 py-2 text-left">
                  Sign In
                </button>
                <p className="text-xs text-gray-500 text-left mt-4">
                  Don't have an account?{" "}
                  <Link to="signin" type="Link">
                    <span className="underline">Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
