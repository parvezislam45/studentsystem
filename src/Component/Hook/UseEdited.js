import { useEffect, useState } from 'react';

const UseEdited =id => {
    const [edit,setEdit] = useState({})
    useEffect(()=>{
        const url = `https://obscure-bastion-40320.herokuapp.com/student/${id}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setEdit(data))
    },[id])
    
    return [edit,setEdit]
};

export default UseEdited;