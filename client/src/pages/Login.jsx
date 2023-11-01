import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../store/actionCreator";

import logo from "../assets/logo-full.png";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(handleLogin(form))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img alt="Welcome" src={logo} className="w-60" />
        </div>

        <div className="mx-auto max-w-lg text-center mt-4">
          <h1 className="text-2xl font-medium sm:text-2xl text-neutral-800">
            Log in to your account
          </h1>
          <p className="mt-2 text-neutral-600 text-sm mx-4">
            Don't have an account?{" "}
            <a className="underline text-blue-600 font-medium" href="">
              Sign up
            </a>
          </p>
        </div>

        <form
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={loginHandler}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border border-neutral-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border border-neutral-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-red-600 px-5 py-3 text-sm font-medium text-white rounded-lg"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
