import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init'

const SignUp = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const {
        register,
        handleSubmit,
    } = useForm();
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name }).then(()=>{navigate("/dashboard")});
        console.log(data);
    };
    return (
        <div className=''>
            <div class="h-screen w-full">
                <div class="bg-gray-800 h-screen mx-auto max-w-md">
                    <div class="p-2">
                        <p class="text-3xl pt-10 text-yellow-500 font-bold">
                            Welcome <br />
                            <span className='text-red-500'>ReSoluteAi</span>
                        </p>
                        <p class="text-xl py-3 text-gray-400 font-semibold">Sign in to continue</p>
                    </div>
                    <div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mx-12 p-3 rounded-xl shadow-sm bg-gray-900">
                        <div class="p-3 mx-6 border-b border-gray-500">
                            <input placeholder="First Name" class="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang" type="text" 
                             {...register("First Name", {
                                required: {
                                    value: true,
                                    message: "First Name is Required",
                                },
                            })}
                            />
                        </div>
                        <div class="p-3 mx-6 border-b border-gray-500">
                            <input placeholder="Last Name" class="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang" type="text"
                             {...register("Last Name", {
                                required: {
                                    value: true,
                                    message: "Last Name is Required",
                                },
                            })}
                            />
                        </div>
                        <div class="p-3 mx-6 border-b border-gray-500">
                            <input placeholder="Enter Your Email" class="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang" type="text" 
                             {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required",
                                },
                            })}
                            />
                        </div>

                        <div class="p-3 mx-6 flex border-b border-gray-500">
                            <input placeholder="Password" class="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full" type="password" 
                             {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                            })}
                            />
                            <div class="w-auto text-yellow-500">eyes</div>
                        </div>
                        <div class="p-3 mx-6 flex border-b border-gray-500">
                            <input placeholder="Re-Type Password" class="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full" type="password" 
                             {...register("name", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                            })}
                            />
                            <div class="w-auto text-yellow-500">eyes</div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                    <input class=" bg-black text-white p-3 rounded-3xl btn w-full max-w-xs hover:bg-yellow-600" type="submit"value="Sign Up"/>
                    <p class="mx-auto text-center mt-3 text-gray-400">Already have an account?  <a href="/" class="text-md font-semibold">Login</a> </p>
                    <div className="text-center">
                    <button  onClick={() => signInWithGoogle().then(()=>{navigate("/dashboard")})} class=" bg-black text-white mt-3 p-3 rounded-3xl btn w-full max-w-xs hover:bg-yellow-600">Continue With Google</button>
                    </div>
                    </div>    
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;