import { useState } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('LoginForm (re)rendered:', username, password);

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`You are logging in with username: ${username} / password: ${password}`);
  };

  return (
    <div className='LoginFormBox'>
      <h2 className='LoginFormHeader'>Login Form</h2>
      <form className='LoginFormInput'>
        <label>Username</label>        
        <input 
          value={ username } //track of 'username' with. 
          onChange={(event) => setUsername(event.target.value)}
          //onChange is callback function that runs every time we change the value in this input field,
          //everytime person types into that field, then react is gonna keep track of the thing.
        />
        <label>Password</label>        
        <input 
          value={ password }
          onChange={event => setPassword(event.target.value)}
          type="password"
        />
        <button type="submit" onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;