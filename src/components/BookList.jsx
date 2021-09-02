//import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import {useState} from 'react'

const BookList = ({ books }) => {                              //<--- transform the class into a function, with destructured props {books}

    const [searchQuery, setSearchQuery] = useState('')        //<---- create 2 useStates instead of normal state
    const [selectedBook, setSelectedBook] = useState(null)

    // state = {
    //     searchQuery: '',
    //     selectedBook: null
    // }

    // remove also the render method of the class 

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Search here"
                                    value={searchQuery}                                      // change value and onChange eventlistener
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {
                            books.filter(b => b.title.toLowerCase().includes(searchQuery)).map(b => (
                                <Col xs={3} key={b.asin} >
                                    <SingleBook
                                        book={b}
                                        selectedBook={selectedBook}                                     // change value and onChange eventlistener
                                        changeSelBook={asin => setSelectedBook(asin)} />
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={4}>                                                      
                    <CommentArea asin={selectedBook} />                                 
                </Col>
            </Row>
        </Container>
    )
}

export default BookList