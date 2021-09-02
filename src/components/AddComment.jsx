//import { Component } from "react";
import { Button, Form } from 'react-bootstrap'
import {useState, useEffect} from 'react'

const AddComment = ({ asin }) => {           //<----- transform the class into a function, with destructure

    // state = {
    //     comment: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }

    let [comment, setComment] = useState({       //<------ use the useState instead of normal state
  
             comment: '',
             rate: 1,
             elementId: null

    })

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

    useEffect(() => {                    //<------ componenDidUpdate change with hooks
        setComment(comm => ({
            ...comm,
            elementId: asin
        }))
    }, [asin])



    const sendComment = async (e) => {       //<----- transform sendComment into a variable
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmM3YzJkNTI2MjAwMTViNmRjYWMiLCJpYXQiOjE2MzA1ODYyNDcsImV4cCI6MTYzMTc5NTg0N30.L3vE3QWrWThCc6WUgiIZfCrWI0B4hK4mO2qPa1SbW6A'
                }
            })
            if (response.ok) {
                alert('Comment was ok!')
            } else {
                console.log('error')
                alert('Oh nooooo!')
            }
        } catch (error) {
            console.log('error')
        }
    }
        return (
            <div>
                <Form id="form1" onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment here</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="add"
                            value={comment.comment}
                            onChange={e => setComment({
   
                                    ...comment,
                                    comment: e.target.value
 
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                            as="select" 
                            value={comment.rate}
                            onChange={e => setComment({
             
                                    ...comment,
                                    rate: e.target.value
       
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
}

export default AddComment