import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";

interface Props {}
const AuthDetails = (props: Props) => {
  const [isUserAuth, setIsUserAuth] = useState<any>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setIsUserAuth(user) : setIsUserAuth(null);
    });

    return () => {
      listen();
    };
  }, []);

  console.log(isUserAuth);

  return <div></div>;
};
export default AuthDetails;
