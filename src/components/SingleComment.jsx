import { ListGroup, Button } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmM3YzJkNTI2MjAwMTViNmRjYWMiLCJpYXQiOjE2MzA1ODYyNDcsImV4cCI6MTYzMTc5NTg0N30.L3vE3QWrWThCc6WUgiIZfCrWI0B4hK4mO2qPa1SbW6A'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>Del</Button>
    </ListGroup.Item>
)

export default SingleComment