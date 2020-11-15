import React from "react";
//import React, { useState } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import RegistrationForm from "./containers/RegistrationForm/RegistrationForm";
import "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from "react-router-dom";

function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <Router>
            <div className="App">
                <div className="container d-flex align-items-center flex-column">
                    <Switch>
                        <Route path="/" exact={true}>
                            <RegistrationForm
                                showError={updateErrorMessage}
                                updateTitle={updateTitle}
                            />
                        </Route>
                        <Route path="/signup">
                            <RegistrationForm
                                showError={updateErrorMessage}
                                updateTitle={updateTitle}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
