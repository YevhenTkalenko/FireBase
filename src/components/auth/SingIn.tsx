import React, { useState } from "react";
import { singInUser } from "../features/userAuthServise";

interface Props {}
const SingIn = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const logInUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    singInUser(email, password);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <form
        className="flex flex-col gap-5 p-6 bg-gray-100 rounded shadow-md w-80 mx-auto mt-9 border border-black"
        onSubmit={logInUser}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Log In
        </h3>
        <label htmlFor="email" className="flex flex-col">
          <span className="mb-2 text-gray-700 font-medium">Email</span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter email"
          />
        </label>
        <label htmlFor="password" className="flex flex-col">
          <span className="mb-2 text-gray-700 font-medium">Password</span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your password"
          />
        </label>

        <p className="text-red-500">{error && "Passwords aren`t mathed"}</p>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>
      </form>
    </>
  );
};
export default SingIn;
