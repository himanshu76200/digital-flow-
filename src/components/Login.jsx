import React, { useState } from 'react';
const axios = require('axios').default;

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
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

    const login = (event) => {
        event.preventDefault();
        console.log(data);

        const url = "http://localhost:5000/login";

        axios.post(url, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="form" onSubmit={login}>
                <input onChange={handleChange} type="text" name="email" placeholder="Email" />
                <br />
                <br />
                <input onChange={handleChange} type="text" name="password" placeholder="password" />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login;
