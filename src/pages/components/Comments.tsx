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
    const [loading, setLoading] = useState(false)
    const [isPosting, setIsPosting] = useState(false)
    const [isPutting, setIsPutting] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [error, setError] = useState<null|string>(null)

    useEffect(() => {
        const asyncFunction = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:3000/Comments")
                if (!response.ok) {
                    setError("An Error Has Occurred: " + response.statusText)
                } else {
                    const data = await response.json();
                    setComments(data)
                    setError(null)
                }
            } catch (error: any) {
                setError("An Error Has Occurred: " + error.message)
            }
            setLoading(false)
        } 
        asyncFunction()
    }, [comments.length])
    
    const addComment = async ( textValue: string ) => {
        const newComment = {
            id: comments.length ? comments[comments.length - 1].id + 1 : 0,
            text: textValue
        }

        setIsPosting(true)
        try {
            const response = await fetch("http://localhost:3000/Comments", {
                method: "POST",
                body: JSON.stringify(newComment),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
                setComments([...comments, newComment])
                setError(null)
            }
        } catch (error: any) {
            setError("An Error Has Occurred: " + error.message)
        }
        setIsPosting(false)
    }

    const editComment = async (idToUpdate: number, editValue: string) => {
        const updateComment = {
            id: idToUpdate,
            text: editValue
        }

        setIsPutting(true)
        try {
            const response = await fetch("http://localhost:3000/Comments/" + idToUpdate, {
                method: "PUT",
                body: JSON.stringify(updateComment),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
        
                setComments(comments.map( comment => (
                    comment.id !== idToUpdate ? comment : {
                      ...comment,
                        text: editValue
                    }
                )))
                setError(null)
            }
        } catch (error: any) {
            setError("An Error Has Occurred: " + error.message)
        }
        setIsPutting(false)
    }

    const deleteComment = async (idToDelete: number) => {
        setIsDeleting(true)
        try {
            const response = await fetch("http://localhost:3000/Comments/" + idToDelete, {
                method: "DELETE",
            })
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
        
                setComments(comments.filter(comment => comment.id !== idToDelete));
                setError(null)
            }
        } catch (error:any) {
            setError("An Error Has Occurred: " + error.message)
        }
        setIsDeleting(false)
    }

    return (
        <>
            {loading ? <p className="text-body-tertiary">Loading...</p> : 
                error ? <p className="text-danger">{error}</p>:
                <div>
                    {comments.map(comment => (
                        <ul key={comment.id} className="d-flex flex-fill flex-nowrap">
                            <li>{comment.text}</li>
                            <div className="d-flex flex-fill justify-content-end">
                                <EditComments editComment={editComment} comment={comment} isPutting={isPutting} isDeleting={isDeleting} />
                                <Button variant="danger" disabled={isDeleting} onClick={() => { deleteComment(comment.id) }}>Delete</Button>
                            </div>
                        </ul>
                    ))}
                </div>
            }

            <div>
                <h2>Add Comment</h2>
                <CommentForm addComment={addComment} isPosting={isPosting} />
            </div>
        </>
    )
}