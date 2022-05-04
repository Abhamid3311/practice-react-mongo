import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {


        //send to server
        const url = 'http://localhost:5000/user/';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(console.log(data))
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)} >
                <input className='mb-2' placeholder='name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input type="submit" value='Add user' />
            </form>
        </div>
    );
};

export default AddProducts;