import React, { useState } from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
import "./SignupForm.css";
const SignupForm = ({
    name,
    email,
    password,
    onSubmit,
    setName,
    setEmail,
    setPassword,
}) => {
    return (
        <div className="SignupForm">
            <h5>Sign up</h5>
            <p>You need to create an account</p>
            <div className="inputs">
                <label>Name</label>
                <Input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="inputs">
                <label>Email</label>
                <Input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="inputs">
                <label>Password</label>
                <Input
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                onClick={() =>
                    onSubmit({
                        name,
                        email,
                        password,
                    })
                }
            >
                Continue
            </Button>
        </div>
    );
};
export default SignupForm;
