// import React from 'react'
// import { useState } from 'react';
// import AuthForm from '../widgets/AuthForm';
// import '../screens/auth.css'

// function Auth() {

//   const [nameShouldBeShown, setNameShouldBeShown] = useState(false);
//   const [buttonName, setButtonName] = useState('Signin');

//   const [auth, setauth] = useState('signin');
//   const handleChange = e => {
//     const target = e.target;
//     if (target.checked) {
//       setauth(target.value);
//       // console.log(auth);
//       if (target.value === 'signup') {
//         setNameShouldBeShown(true);
//         setButtonName('Signup');
//       }
//       else {
//         setNameShouldBeShown(false);
//         setButtonName('Signin');
//       }
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='Wrapper'>
//         <h1>Welcome to Qrit</h1>
//         <div className='Center'>
//             <label><input type="radio" name="auth" value="signup" checked={auth === 'signup'} onChange={handleChange} /> Sign up</label>
//             <br></br>
//             <label><input type="radio" name="auth" value="signin" checked={auth === 'signin'} onChange={handleChange} /> Login</label>
//             <AuthForm nameShouldBeShown={nameShouldBeShown} buttonName={buttonName}></AuthForm>
//             <br></br>
//         </div>
//       </div> </div>

//   )
// }

// export default Auth



import React, { useState } from 'react';
import AuthForm from '../widgets/AuthForm';
import '../screens/auth.css';

function Auth() {
  const [nameShouldBeShown, setNameShouldBeShown] = useState(false);
  const [buttonName, setButtonName] = useState('Signin');
  const [auth, setAuth] = useState('signin');

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setAuth(target.value);
      if (target.value === 'signup') {
        setNameShouldBeShown(true);
        setButtonName('Signup');
      } else {
        setNameShouldBeShown(false);
        setButtonName('Signin');
      }
    }
  };

  return (
    <div className='container'>
      <div className='Wrapper'>
        <h1>Welcome to Qrit</h1>
        <div className='Center'>
          <label className="radio-label">
            <input type="radio" name="auth" value="signup" checked={auth === 'signup'} onChange={handleChange} />
            <span>Sign up</span>
          </label>
          <br />
          <label className="radio-label">
            <input type="radio" name="auth" value="signin" checked={auth === 'signin'} onChange={handleChange} />
            <span>Login</span>
          </label>
          <AuthForm nameShouldBeShown={nameShouldBeShown} buttonName={buttonName}></AuthForm>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Auth;

