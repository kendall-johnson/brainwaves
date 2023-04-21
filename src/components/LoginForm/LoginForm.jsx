import { useState } from 'react';
import { login } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser, showLogin, setShowLogin }) {
const navigate = useNavigate();
const [credentials, setCredentials] = useState({
email: '',
password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
setError('');
}

async function handleSubmit(evt) {
evt.preventDefault();
try {
const user = await login(credentials);
setUser(user);
navigate('/home');
} catch {
setError('Log In Failed - Try Again');
}
}

  return (
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            WELCOME BACK
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label
                    
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={credentials.email} 
                    onChange={handleChange} required
                />
            </div>
            <div className="mb-2">
                <label
                    
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    required
                />
            </div>
            <div className="mt-6">
                <button  type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
        

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
                className="font-medium text-purple-600 hover:underline"
                onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}
            
               
            </a>
        </p>
        {error && <p className="error-message pt-12">&nbsp;{error}</p>}
    </div>
</div>
</>
  );
}