import React, { useEffect, useState } from 'react';

const Products = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Our Products: {users.length}</h2>
            {
                users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </div>
    );
};

export default Products;