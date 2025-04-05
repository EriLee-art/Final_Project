import { useEffect, useState } from "react"
import CommentForm from "./CommentForm"
import EditComments from "./EditComments"
import { Button } from "react-bootstrap"

type Comment = {
    id: number
    text: string
}


export default function Comments() {

    // Sets an array of comments from db.json
    const [comments, setComments] = useState<Comment[]>([])
    // State for when api calls are happening
    const [loading, setLoading] = useState(false)

    /**
     * Individual state that determines what to disable
     * depending on the part of the app the user interacts
     * with.
     */
    const [isPosting, setIsPosting] = useState(false)
    const [isPutting, setIsPutting] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    // Sets an error message
    const [error, setError] = useState<null|string>(null)

    /**
     * Asynchronous effect that fetches all the comments every time there's a 
     * change in the comments array
     */
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
    
    // POSTs a comment to db.json
    const addComment = async (textValue: string) => {
        // Creates a new comment with a new id and text the user inputted
        const newComment = {
            id: comments.length ? comments[comments.length - 1].id + 1 : 0,
            text: textValue
        }

        // Sets posting to true which will disable certain code so the user knows something's happening
        setIsPosting(true)

        // Try Catch to catch any errors that may happen when running the POST request
        try {

            // Runs a POST request that POSTs the newComment object
            const response = await fetch("http://localhost:3000/Comments", {
                method: "POST",
                body: JSON.stringify(newComment),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            // if the response is not okay, set error message, otherwise run code
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
                setComments([...comments, newComment])
                setError(null)
            }

            // If any errors were caught in the process, set error message
        } catch (error: any) {
            setError("An Error Has Occurred: " + error.message)
        }

        // when POST is done, set Posting to false
        setIsPosting(false)
    }

    // PUTs an updated Comment into db.json
    const editComment = async (idToUpdate: number, editValue: string) => {

        // Creates an object to update a comment in db.json
        const updateComment = {
            id: idToUpdate,
            text: editValue
        }

        // when putting is true, disables certain code so the user knows it's loading
        setIsPutting(true)

        // Try Catch to catch any errors that may happen when running the PUT request
        try {

            // PUT request that edits only the comment that the specific id relates to
            const response = await fetch("http://localhost:3000/Comments/" + idToUpdate, {
                method: "PUT",
                body: JSON.stringify(updateComment),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            // If response bad, set error message, otherwise run code
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
        
                /**
                 * Edits the comments array to update the specific comment to render immediately
                 * in the front end.
                 */
                setComments(comments.map( comment => (
                    comment.id !== idToUpdate ? comment : {
                      ...comment,
                        text: editValue
                    }
                )))
                setError(null)
            }
            // If an error is caught anywhere here, set error message
        } catch (error: any) {
            setError("An Error Has Occurred: " + error.message)
        }

        // Re-enables code when putting is false
        setIsPutting(false)
    }

    // DELETEs a Comment
    const deleteComment = async (idToDelete: number) => {

        // sets isDeleting to true, disabling certain buttons so the user doesn't keep trying
        setIsDeleting(true)

        // Try Catch catch any errors that may happen when running the DELETE request
        try {

            // DELETE request that deletes the comment with the specific id
            const response = await fetch("http://localhost:3000/Comments/" + idToDelete, {
                method: "DELETE",
            })

            // If response bad, set error message, otherwise run code
            if (!response.ok) {
                setError("An Error Has Occurred: " + response.statusText)
            } else {
                response
        
                // Deletes the comment on the front-end immediately
                setComments(comments.filter(comment => comment.id !== idToDelete));
                setError(null)
            }

            // If error occurs in any of the above code, set error message
        } catch (error:any) {
            setError("An Error Has Occurred: " + error.message)
        }

        // Re-enables certain code
        setIsDeleting(false)
    }

    return (
        <>
            {/** 
             * When loading is true, shows loading... while the app renders,
             * if an error occurs, it renders an error message.
             * Otherwise, it shows the rest of the code.
             */}
            {loading ? <p className="text-body-tertiary">Loading...</p> : 
                error ? <p className="text-danger">{error}</p>:
                    <div>
                        {/** Maps out the comments from the comments array */}
                    {comments.map(comment => (
                        <ul key={comment.id} className="d-flex flex-fill flex-nowrap">
                            <li>{comment.text}</li>
                            <div className="d-flex flex-fill justify-content-end">

                                {/** Buttons for Editing, which opens a modal, and Deleting comments */}
                                <EditComments editComment={editComment} comment={comment} isPutting={isPutting} isDeleting={isDeleting} />
                                <Button variant="danger" disabled={isDeleting} onClick={() => { deleteComment(comment.id) }}>Delete</Button>
                            </div>
                        </ul>
                    ))}
                </div>
            }

            <div>
                <h2>Add Comment</h2>
                {/** Calls CommentForm.tsx to render a Form within the Modal */}
                <CommentForm addComment={addComment} isPosting={isPosting} />
            </div>
        </>
    )
}