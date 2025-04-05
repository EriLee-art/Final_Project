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

    const [reviews, setReviews] = useState<Review[]>([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<null|string>(null);

    useEffect(() => {
        const asyncFunction = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:3000/Reviews")

                if (!response.ok) {
                    setError("An Error Has Occurred: " + response.statusText)
                } else {
                    const data = await response.json()
                    setReviews(data)
                    setError(null)
                }
            } catch (error: any) {
                setError("An Error Has Occurred: " + error.message)
            }
            setLoading(false)
        }
        asyncFunction()
    },[])

    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <h1>Reviews</h1>
            </div>

            {loading ? <p className="d-flex justify-content-center text-body-tertiary fs-1">Loading...</p> :
                error ? <p className="d-flex justify-content-center text-danger">{error}</p> :
                <div className="container mt-3">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {reviews.map(review => (
                            <div key={review.id} className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title fs-3">{review.name}</h5>
                                    <p className="card-text fs-3">{review.title} ({review.rank}/10)</p>
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