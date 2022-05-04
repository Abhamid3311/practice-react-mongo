import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    //send to server
    const handleDelete = id => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
    }
    return (
        <div>
            <h3>Manage your products</h3>

            {
                users.map(user => <h4 key={user.id}>{user.name} <button onClick={() => handleDelete(user._id)}>X</button></h4>)
            }
        </div>
    );
};

export default ManageProducts;