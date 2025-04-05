import { useEffect, useState } from "react"
import CommentForm from "./CommentForm"
import EditComments from "./EditComments"
import { Button } from "react-bootstrap"

type Comment = {
    id: number
    text: string
}


export default function Comments() {

    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const asyncFunction = async () => {
            const response = await fetch("http://localhost:3000/Comments")
            const data = await response.json();
            setComments(data)
        } 
        asyncFunction()
    }, [comments.length])
    
    const addComment = async ( textValue: string ) => {
        const newComment = {
            id: comments.length ? comments[comments.length - 1].id + 1 : 0,
            text: textValue
        }

        const response = await fetch("http://localhost:3000/Comments", {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        response

        setComments([...comments, newComment])
    }

    const editComment = async (idToUpdate: number, editValue: string) => {
        const updateComment = {
            id: idToUpdate,
            text: editValue
        }

        const response = await fetch("http://localhost:3000/Comments/" + idToUpdate, {
            method: "PUT",
            body: JSON.stringify(updateComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        response

        setComments(comments.map( comment => (
            comment.id !== idToUpdate ? comment : {
              ...comment,
                text: editValue
            }
        )))
    }

    const deleteComment = async (idToDelete: number) => {
        const response = await fetch("http://localhost:3000/Comments/" + idToDelete, {
            method: "DELETE",
        })
        response

        setComments(comments.filter(comment => comment.id !== idToDelete));
    }

    return (
        <>
            <div>
                {comments.map(comment => (
                    <ul key={comment.id} className="d-flex flex-fill flex-nowrap">
                        <li>{comment.text}</li>
                        <div className="d-flex flex-fill justify-content-end">
                            <EditComments editComment={editComment} comment={comment} />
                            <Button variant="danger" onClick={() => { deleteComment(comment.id) }}>Delete</Button>
                        </div>
                    </ul>
                ))}
            </div>

            <div>
                <h2>Add Comment</h2>
                <CommentForm addComment={addComment} />
            </div>
        </>
    )
}