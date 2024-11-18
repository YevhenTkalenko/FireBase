import { useState } from "react";
import SingIn from "./components/auth/SingIn";
import SingUp from "./components/auth/SingUp";

function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          isSuccess ? "block" : "hidden"
        } bg-green-100 text-green-700 border border-green-400 p-4`}
      >
        User successfully created
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SingUp setIsSuccess={setIsSuccess} />
        <SingIn />
      </div>
    </>
  );
}

export default App;
