import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'

class Registration extends Component {
  state = {
    isLoading: false,
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    showComplete: false,
  };

  handleInput = (key, value) => {
    this.setState({
      registration: {
        ...this.state.registration,
        [key]: value,
      },
    });
  };

  handleRegistration = (e) => {
    e.preventDefault();
    this.setState({
        isLoading: true,
        showComplete: true,
    });
     setTimeout(() => {
            this.props.history.push('home')
        }, 2000)
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        {this.state.showComplete ? (
          <> <Spinner animation="border" variant="light" style={{ width: '20px', height: '20px' }} />
            <h1>Registration complete! Wait a second to come back to home</h1>
            <h3>Your details:</h3>
            <p>{this.state.registration.name}</p>
            <p>{this.state.registration.surname}</p>
            <p>{this.state.registration.email}</p>
          </>
        ) : (
          <>
            <h1 id="formName">Registration Stribook</h1>
            <Form id="form2" onSubmit={this.handleRegistration}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="name"
                  onChange={(e) => this.handleInput("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="surname"
                  onChange={(e) => this.handleInput("surname", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="email"
                  onChange={(e) => this.handleInput("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="password"
                  onChange={(e) => this.handleInput("password", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="confirmPassword"
                  onChange={(e) =>this.handleInput("confirmPassword", e.target.value)}
                />
              </Form.Group>
               <Button disabled={this.state.isLoading}
                        type="submit" variant="primary">
                         {this.state.isLoading && <Spinner animation="border" variant="light" style={{ width: '20px', height: '20px' }} />}
                         <span className="ml-1">{this.state.isLoading ? 'Sending...' : 'Send Form!'}</span>
                </Button>
            </Form>
          </>
        )}
      </div>
    );
  }
}

export default Registration