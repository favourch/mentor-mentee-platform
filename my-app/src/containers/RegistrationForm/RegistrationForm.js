import React, { useState } from "react";
import axios from "axios";
import SignupForm from "../../components/SignupForm/SignupForm.component";
import { withRouter } from "react-router-dom";
function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(null);

    const sendDetailsToServer = () => {
        const payload = {
            username: name,
            email,
            password,
            mentor: true,
            mentee: false,
        };
        axios
            .post("http://localhost:3000/api/v1/signup", payload)
            .then(function (response) {
                if (response.status === 200) {
                    setState((prevState) => ({
                        ...prevState,
                        successMessage:
                            "Registration successful. Redirecting to home page..",
                    }));
                } else {
                    //props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handleSubmitClick = (input) => {
        sendDetailsToServer(input);
    };
    return (
        <SignupForm
            onSubmit={(input) => handleSubmitClick(input)}
            name={name}
            email={email}
            password={password}
            setEmail={setEmail}
            setName={setName}
            setPassword={setPassword}
        />
    );
}
export default withRouter(RegistrationForm);
