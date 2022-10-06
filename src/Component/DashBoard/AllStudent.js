import React from 'react';
import useStudent from '../Hook/UseStudent';
import StudentDetails from './StudentDetails'


const AllStudent = () => {
    const [students,setStudents]=useStudent()
    const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
            const url = `https://obscure-bastion-40320.herokuapp.com/student/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = students.filter(student => student._id !== id);
                setStudents(remaining);
    
            })
        }
    }
    
    return (
        <div>
          <h1>Student {students.length}</h1> 
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-black dark:text-black">
                    <thead class="text-xs text-white uppercase bg-red-500 dark:bg-red-500 dark:text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Avatar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Roll
                            </th>
                            <th scope="col" class="px-6 py-3">
                                View
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => <StudentDetails
                                key={student._id}
                                student={student}
                                handleDelate={()=>handleDelate(student._id)}
                            ></StudentDetails>)
                        }
                    </tbody>
                </table>
            </div>
 
        </div>
    );
};

export default AllStudent;