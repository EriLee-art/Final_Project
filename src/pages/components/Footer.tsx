export default function Footer() {
    return (
        <>
            {/** 
             * Same as Week 2, just prettied up and separated from Root.tsx for
             * easier editing
             */}
            <hr className="mb-0 mt-5"/>
            
            <footer className="d-flex flex-column align-items-center">
                <h1 className="text-center m-5">CONTACT US</h1>

                <div>
                    <p className="d-flex flex-wrap column-gap-3 fs-1 ms-5 mb-5">You can visit us at:
                        <a href="https://bsky.app/" className="text-reset">Bluesky</a>
                        <a href="https://mastodon.social" className="text-reset">Mastodon</a>
                        <a href="https://www.instagram.com/" className="text-reset">Instagram</a>
                        <a href="https://www.x.com/" className="text-reset">Twitter</a>
                    </p>
                </div>
            </footer>
        </>
    )
}