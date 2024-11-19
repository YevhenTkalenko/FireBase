import { useEffect, useState } from "react";
import SingIn from "./components/auth/SingIn";
import SingUp from "./components/auth/SingUp";
import AuthDetails from "./components/auth/AuthDetails";
import { timerForCreateUser } from "./components/features/userAuthServise";

function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    timerForCreateUser(setIsSuccess);
  }, [isSuccess]);

  return (
    <>
      <div className="text-center mb-2.5 p-2.5">
        <AuthDetails />
      </div>
      <hr />
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
