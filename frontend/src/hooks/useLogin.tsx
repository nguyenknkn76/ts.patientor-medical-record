import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../configs/firebase.config";
import { login } from "../store/slices/userSlice";

export const useLogin = (redirectPath: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userData = {
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        isLoggedIn: true,
      };

      dispatch(login(userData));
      localStorage.setItem('loggedin-user', JSON.stringify(userData));

      navigate(redirectPath);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
};
