import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authLink, setAuthLink] = useState('');
  const navigate = useNavigate();
  const signInWithTwitter = async () => {
    try {
      const response = await fetch('http://localhost:4000/getAuthLink')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
     response.json().then((data)=>{
      console.log(data)
      login(data.url);
      setAuthLink(data.url);
     })
    }catch (error) {
      console.error('Error fetching auth link:', error);
    }
};
// console.log(authLink)
const login = async () => {
  console.log(authLink)
  navigate(authLink,{replace: true});
  // try {
   
  //   const response = await fetch("https://api.x.com/oauth/authorize?oauth_token=Z5fWjQAAAAABwHakAAABkjyrbeE", {
  //     method: 'POST', // Use POST if sending data
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // mode: "no-cors",
  //     body: JSON.stringify({url:authLink}), // Send data as JSON
  //   });

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.error('Error fetching auth link:', error);
  // }
};
  return (
    <div>
      <button onClick={signInWithTwitter}>Sign in with Twitter</button>
      <button onClick={login}>Sign</button>
    </div>
  );
};

export default Login;
