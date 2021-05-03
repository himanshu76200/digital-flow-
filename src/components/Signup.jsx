import React, { useState } from 'react';
const axios = require('axios').default;


function Signup() {

    const [data, setData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        address: '',
        mobile: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            };
        });
    }

    const signup = (event) => {
        event.preventDefault();
        console.log(data)

        axios.post()
    }

    return (
        <div>
            <h1>Signup</h1>
            <form className="form" onSubmit={signup}>
                <input onChange={handleChange} type="text" name="username" placeholder="username" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="name" placeholder="Name" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="email" placeholder="Email" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="password" placeholder="Password" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="address" placeholder="Address" />
                <br />
                <br />
                <input onChange={handleChange} type="number" name="mobile" placeholder="Mobile" />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup;
