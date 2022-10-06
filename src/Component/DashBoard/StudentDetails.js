import React from 'react';
import { Link } from 'react-router-dom';

const StudentDetails = ({ student, handleDelate }) => {
    const { _id, firstName, roll, room,image } = student
    return (
        <tr class="border-b dark:bg-white dark:white odd:bg-white even:bg-gray-50 odd:dark:bg-white even:dark:bg-white">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-black whitespace-nowrap">
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={image}alt="" />
                    </div>
                </div>
            </th>
            <td class="px-6 py-4">
                {firstName}
            </td>
            <td class="px-6 py-4">
                {room}
            </td>
            <td class="px-6 py-4">
                {roll}
            </td>
            <td class="px-6 py-4 gap-4">
                <Link to={`/view/${_id}`}><button>View</button></Link>
            </td>
            <td class="px-6 py-4 gap-4">
                <Link to={`/edit/${_id}`}><button>Edit</button></Link>

            </td>
            <td class="px-6 py-4 gap-4">
                <button onClick={() => handleDelate()}>Delate</button>
            </td>
        </tr>
    );
};

export default StudentDetails;