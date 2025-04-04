import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Review from "./components/Review"
import { Button, Modal } from "react-bootstrap"

type Review = {
    id: number
    name: string
    rank: number
    title: string
    link: string
}

export default function Reviews() {

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const asyncFunction = async () => {
            const response = await fetch("http://localhost:3000/Reviews")
            const data = await response.json()
            setReviews(data)
        }
        asyncFunction()
    },[])

    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <h1>Reviews</h1>
            </div>

            <div className="container mt-3">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    {reviews.map(review => (
                        <div key={review.id} className="card p-3">
                            <div className="card-body">
                                <h5 className="card-title fs-3">{review.name}</h5>
                                <p className="card-text fs-3">{review.title} ({review.rank}/10)</p>
                                <Review />
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </>
    )
}