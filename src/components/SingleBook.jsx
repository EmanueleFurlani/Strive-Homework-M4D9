//import React from 'react'
//import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ( {book, changeSelBook, selectedBook} ) => {



        return (
            <>
                <Card
                    onClick={() => changeSelBook(book.asin)}
                    style={{ border: selectedBook === book.asin ? '5px solid green' : 'none' }}
                >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'blue' }}>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </>
        )

}

export default SingleBook