import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';
import "../../index.css"





export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <main className="AuthPage">
      <div>
        {/* <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3> */}
      </div>
      {showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/> : <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>}
    </main>
</>    
  );
}