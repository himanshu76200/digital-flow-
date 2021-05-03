import React, { useState } from 'react';
const axios = require('axios').default;

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response.status)
                if (response.status === 200) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            })


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
                <input class="submit-button" type="submit" />
            </form>
            {isLoggedIn ? <h1>successfully LoggedIN</h1> : <h1>Enter username password correctly</h1>}
        </div>
    )
}

export default Login;
