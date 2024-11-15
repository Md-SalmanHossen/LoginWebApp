import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder='Username' 
          id='username' 
          className='bg-slate-100 p-3 rounded-lg' 
        />
        <input 
          type="email" 
          placeholder='Email' 
          id='email' 
          className='bg-slate-100 p-3 rounded-lg' 
        />
        <input 
          type="password" 
          placeholder='Password' 
          id='password' 
          className='bg-slate-100 p-3 rounded-lg' 
        />
        <button className='bg-green-600 text-bold text-white rounded-lg uppercase p-3 hover:opacity-80'>
          Sign Up
        </button>

        <div className='flex gap-2 mt-3'>
          <p>Have an account?</p>
          <Link to='/sign-in'>
            <span className='text-blue-500'>Sign In</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
