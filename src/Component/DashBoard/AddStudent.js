import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudent = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const url = `https://obscure-bastion-40320.herokuapp.com/student`;
        console.log(url)
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            alert('Student added successfully',result);
            event.target.reset()
        })
    }
    return (
        <div>
            <section class=" py-1 bg-blueGray-50">
                <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text-blueGray-700 text-xl font-bold">
                                    Add Student
                                </h6>
                                <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    05-10-2022
                                </button>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit( onSubmit)}>
                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Student Information
                                </h6>
                                <div class="flex">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='First Name' {...register("firstName", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Middle Name' {...register("middleName", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Last Name' {...register("lastName", {
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-6 border-b-1 border-blueGray-300" />
                                <div class="flex">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <select className='border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' {...register("room")}>
                                                <option value="Select Class">Select Class</option>
                                                <option value="I">I</option>
                                                <option value="II">II</option>
                                                <option value="III">III</option>
                                                <option value="IV">IV</option>
                                                <option value="V">V</option>
                                                <option value="VI">VI</option>
                                                <option value="VII">VII</option>
                                                <option value="VIII">VIII</option>
                                                <option value="IX">IX</option>
                                                <option value="X">X</option>
                                                <option value="XI">XI</option>
                                                <option value="XII">XII</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <select className='border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' {...register("division")}>
                                                <option value="Select Division">Select Division</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter Roll Number Digits' {...register("roll", {
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-6 border-b-1 border-blueGray-300" />
                                <div class="flex">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Address-1' {...register("address1", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Address-2' {...register("address2", {
                                            })} />
                                        </div>
                                    </div>

                                </div>
                                <hr class="mt-6 border-b-1 border-blueGray-300" />
                                <div class="flex">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Land-Mark' {...register("landMark", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='City' {...register("city", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Post-Code' {...register("postCode", {
                                            })} />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Input Image Url' {...register("image", {
                                            })} />
                                        </div>
                                    </div>
                                <div className="mt-5">
                                    <input class=" bg-red-500 text-white p-3 rounded-md btn w-full max-w-xs hover:bg-pink-600" type="submit" value="Add Student" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default AddStudent;