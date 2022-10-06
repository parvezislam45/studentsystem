import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading'

const Home = () => {
    const [signInWithGoogle, gLoading,gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    let signInError;
    const navigate = useNavigate();
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password).then(()=>{navigate("/dashboard")})
    }
    return (
        <div>
            <div class="h-screen w-full">
                <div class="bg-gray-800 mx-auto max-w-md h-screen">
                    <div class="p-12">
                        <p class="text-4xl text-yellow-500 font-bold -mt-2">
                            Welcome <br />
                            Back
                        </p>
                        <p class="text-xl py-3 text-gray-400 font-semibold -mt-2">Sign in to continue</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mx-10 rounded-xl shadow-sm bg-gray-900 -mt-4">
                            <div class="p-3 mx-6 border-b border-gray-500">
                                <input placeholder="Email" class="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang" type="text"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div class="p-3 mx-6 flex border-b border-gray-500">
                                <input placeholder="Password" class="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full" type="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                <div class="w-auto text-yellow-500">eyes</div>
                            </div>
                        </div>
                        <div class="mx-12 p-3 justify-between flex">
                            <div class="flex">
                                <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer" />
                                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"></label>
                                </div>
                                <label for="toggle" class="text-xs text-gray-300 mt-1">Remember me</label>
                            </div>
                            <div class="bg mt-1 text-xs text-gray-300 ">
                                <a href="/">forget password?</a>
                            </div>
                            {signInError}
                        </div>
                        <div class="w-full p-12 -mt-5">
                            <input class=" btn bg-black p-3 rounded-3xl w-full h-full text-white hover:bg-yellow-600" type="submit" value="Login" />
                            <Link to="/sign"><p class="mx-auto text-center mt-3 text-gray-400">don't have an account ?      Sign up</p></Link>
                        </div>
                        <div class="flex justify-center gap-5 w-full -mt-8 ">
                            <button onClick={() => signInWithGoogle().then(()=>{navigate('/dashboard')})} class="bg-black text-white rounded-3xl btn w-full max-w-xs hover:bg-yellow-600">
                                <svg class="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                                <span>Google</span>
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Home;