import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import UseEdited from '../Hook/UseEdited';

const Edit = () => {
    const { id } = useParams();
    const [edit, setEdit] = UseEdited(id)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        const student = {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            room: data.room,
            division: data.division,
            roll: data.roll,
            address1: data.address1,
            address2: data.address2,
            landMark: data.landMark,
            city: data.city,
            postCode: data.postCode,

        }
        console.log(data)
        fetch(`https://obscure-bastion-40320.herokuapp.com/student/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                alert('updated successfully')
                console.log(data)
            })
    }
    const [isReload] = useState(false)
    useEffect(() => {
        const url = `https://obscure-bastion-40320.herokuapp.com/student${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setEdit(data))
    }, [isReload])
    return (
        <div className=''>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Student Information
                    </h6>
                    <div class="flex">
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.firstName} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='First Name' {...register("firstName", {
                                })} />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.middleName} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Middle Name' {...register("middleName", {
                                })} />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.lastName} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Last Name' {...register("lastName", {
                                })} />
                            </div>
                        </div>
                    </div>
                    <hr class="mt-6 border-b-1 border-blueGray-300" />
                    <div class="flex">
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <select defaultValue={edit.room} className='border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' {...register("room")}>
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
                                <select defaultValue={edit.division} className='border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' {...register("division")}>
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
                                <input defaultValue={edit.roll} type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter Roll Number Digits' {...register("roll", {
                                })} />
                            </div>
                        </div>
                    </div>
                    <hr class="mt-6 border-b-1 border-blueGray-300" />
                    <div class="flex">
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input defaultValue={edit.address1} type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Address-1' {...register("address1", {
                                })} />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input defaultValue={edit.address2} type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Address-2' {...register("address2", {
                                })} />
                            </div>
                        </div>

                    </div>
                    <hr class="mt-6 border-b-1 border-blueGray-300" />
                    <div class="flex">
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.landmark} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Land-Mark' {...register("landMark", {
                                })} />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.city} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='City' {...register("city", {
                                })} />
                            </div>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="relative w-full mb-3">
                                <input type="text" defaultValue={edit.postCode} class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Post-Code' {...register("postCode", {
                                })} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <input class=" bg-red-500 text-white p-3 rounded-md btn w-full max-w-xs hover:bg-pink-600" type="submit" value="Update Student Information" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;