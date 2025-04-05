import { useEffect, useState } from "react"
import Review from "./components/Review"

type Review = {
    id: number
    name: string
    rank: number
    title: string
    reason: string
}

export default function Reviews() {

    // Contains an array of all the reviews in db.json
    const [reviews, setReviews] = useState<Review[]>([]);

    // State for when api calls are happening
    const [loading, setLoading] = useState(false);

    // State for if/when the loading catches an error
    const [error, setError] = useState<null|string>(null);

    /**
     * Runs at startup, runs once to load in automatically without the reviews
     * then runs again asynchronously to GET all the reviews
     * from db.json
     */
    useEffect(() => {
        // Async Function wrapped in an anonymous function so Typescript is happy
        const asyncFunction = async () => {

            // Sets Loading to true, which shows the page is loading in another component
            setLoading(true)

            // Try Catch to see if an error occurs when grabbing the reviews
            try {

                // GET http request for the reviews
                const response = await fetch("http://localhost:3000/Reviews")

                // If the response from GET request is not okay, show set this error message
                if (!response.ok) {
                    setError("An Error Has Occurred: " + response.statusText)
                } else {
                    // If response is okay, run this.
                    const data = await response.json()
                    setReviews(data)
                    setError(null)
                }

                // If an error occurred at any point in the try, set this error message
            } catch (error: any) {
                setError("An Error Has Occurred: " + error.message)
            }

            // At this point the function completed its task and sets loading to false
            setLoading(false)
        }

        // Calls the function
        asyncFunction()
    },[])

    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <h1>Reviews</h1>
            </div>

            {/** 
             * When loading is true, sets the page to Loading..., if an error occurs, it displays
             * the error message, otherwise shows the rest of the page once loading is complete
             * and set to false
             */}
            {loading ? <p className="d-flex justify-content-center text-body-tertiary fs-1">Loading...</p> :
                error ? <p className="d-flex justify-content-center text-danger">{error}</p> :
                <div className="container mt-3">
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            
                            {/**Maps out all of the reviews into separate cards */}
                        {reviews.map(review => (
                            <div key={review.id} className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title fs-3">{review.name}</h5>
                                    <p className="card-text fs-3">{review.title} ({review.rank}/10)</p>

                                    {/** 
                                     * Calls upon Review.tsx which contains a button so when it's clicked,
                                     *  it will render a modal and other data with it.
                                     *  Parts of the reviews that are mapped are passed down into the
                                     *  component
                                     */}
                                    <Review
                                        name={review.name}
                                        title={review.title}
                                        rank={review.rank}
                                        reason={review.reason}
                                    />
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            }
        </>
    )
}