export default function HomePage() {
    /**
     * The same as my Week 2 Assignment, just prettied up with Bootstrap
     */
    return (
        <>
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <h2 className="text-center mt-5">Home to a variety of game reviews!</h2>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-center fs-5 m-5 pe-5 ps-5">We pride ourselves in the proper ways of writing videogame reviews unlike the "journalism" that modern review sites are. With our unique scoring system, we make sure that our scores are accurate to how player expectations should be. We won't back down to big corporations with money to throw around, nor will we buckle to societal pressures to leave a good review on a game.</p>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-center mt-5">How we differ:</h2>

                    <ol className="fs-5 m-5 pe-5 ps-5">
                        <li>Our scoring system runs on a scale of -10 to 10. Our baseline score is 0, not the weird industry standard of 7/10.</li>
                        <li>Initial scoring starts <b>objectively</b> with game performance and bugs. More problems means a negative scoring rank. Less problems to near perfection means positive scores. From there, scoring starts from -5 or 5.</li>
                        <li>Because of this initial scoring we can safely use -10/-10 or 10/10 as a subjective metric of how <b>fun or terrible</b> the game actually is, whether it's so bad it's great or it's so amazing that it's a must play. All the while 0 means what it should mean, that the game is absolutely horrendous to slough through and it's not worth the money or effort for anyone.</li>
                    </ol>
                </div>

                <div className="d-flex text-center flex-column align-items-center justify-content-center">
                    <h2 className="mt-5">Why is this preferable?</h2>
                    <p className="fs-5 m-5 pe-5 ps-5">While you can never remove the subjectivity out of game reviews, a game should be based on its own merits, not on the public zeitgeist, not whatever 7/10 means for big name gaming websites, nor what the game company's motives or ideologies are. Games are products and art, and should be treated as such with a fair scoring system that informs purchases, not make it more confusing.</p>
                </div>
            </div>
        </>
    )
}