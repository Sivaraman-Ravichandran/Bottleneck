import React, { useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

const Front = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? <SignIn /> : <SignUp />}
      <button onClick={() => setShow(!show)}>
        {show ? "Create Account" : "Log In"}
      </button>
    </>
  );
};

export default Front;
