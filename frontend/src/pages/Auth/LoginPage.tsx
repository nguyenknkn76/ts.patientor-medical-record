import { useLogin } from '../../hooks/useLogin';

const LoginPage = () => {
  const handleLogin = useLogin("/");
  return (
    <>
      <div>
        Login form here
      </div>
      <div>
        <p>some other ways to login</p>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </>
  );
};

export default LoginPage;


// import { signInWithPopup } from 'firebase/auth';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { auth, googleProvider } from '../../configs/firebase.config';
// import { login } from '../../store/slices/userSlice';

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       // console.log(user);
//       dispatch(login({
//         uid: user.uid,
//         displayName: user.displayName || '',
//         email: user.email || '',
//         photoURL: user.photoURL || '',
//         isLoggedIn: true,
//       }));
//       navigate('/page1');
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <>
//       some other ways to login: ...
//       <button onClick={handleLogin}>Login with Google</button>;
//     </>
//   ) 
// };
// export default LoginPage;