import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import "../css/login-form.css";

const SignInError = () => (
    <div class="alert alert-danger" role="alert">
        <strong>Bad credentials</strong> - enter correct username and password and try again.
    </div>
);

const SignOutInfo = () => (
    <div class="alert alert-success" role="alert">
        You successfully logged out.
    </div>
);

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/signin?error" component={SignInError}/>
                    <Route exact path="/signin?logout" component={SignOutInfo}/>
                    <Route exact path="/signin" render={() =>
                        <div className="Login">
                            <form action='/signin' method='POST'>
                                <FormGroup controlId="username" bsSize="large">
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleChange}
                                        type="password"
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </form>
                        </div>
                    }
                    />
                </div>
            </Router>
        );
    }
}