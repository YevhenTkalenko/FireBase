import { useEffect, useState } from "react";
import { isUserChangeState, logOutUser } from "../features/userAuthServise";

interface Props {}
const AuthDetails = (props: Props) => {
  const [userAuth, setUserAuth] = useState<any>(null);

  useEffect(() => {
    isUserChangeState(setUserAuth);

    return () => isUserChangeState(setUserAuth);
  }, []);

  return (
    <div>
      {userAuth ? (
        <div>
          <div className="text-center p-4 bg-gray-100 rounded shadow border border-black mb-5">
            <p>{`Welcome back ${userAuth.email}`}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={logOutUser}
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-4 bg-gray-100 rounded shadow border border-black">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Please, log in into your account
          </p>
          <p className="text-sm text-gray-600">
            If you haven’t an account, please sign up
          </p>
        </div>
      )}
    </div>
  );
};
export default AuthDetails;
