import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useLogin } from "../../hooks/useLogin";
import { useEffect } from "react";

const Page1 = () => {
  const user = useSelector((state: RootState) => state.user);
  const handleLogin = useLogin("/page1");

  useEffect(() => {
    if (!user.isLoggedIn) {
      handleLogin();
    }
  },[user.isLoggedIn, handleLogin]);

  if (!user.isLoggedIn) {
    return <p>you have to login to access this page</p>;
  }

  return (
    <div>
      <h1>Page 1 - Welcome, {user.displayName}!</h1>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="User avatar" style={{ width: '100px', borderRadius: '50%' }} />
    </div>
  );
};

export default Page1;