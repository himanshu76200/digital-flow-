import React, { useState } from 'react';

function Signup() {

    const [isSignedUp, setIsSignedUp] = useState(false);

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

    const signup = async (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/signup', {
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
                    setIsSignedUp(true)
                }
            })

        console.log(JSON.stringify(data))
        console.log(isSignedUp)

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
                <input class="submit-button" type="submit" />
            </form>
            {isSignedUp ? <h1>successfully signed up</h1> : <h1>Username or email alredy exits</h1>}
        </div>
    )
}

export default Signup;
