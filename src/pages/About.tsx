export default function About() {
    return (
        <>
            <header className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <h1>About Us</h1>
            </header>

            <div className="d-flex flex-column fluid-container align-items-center mw-25 p-3 m-5 fs-3">
                    <img src="src/assets/reaction.png" style={{ maxHeight: "500px" }} alt="Eric as a confused deer" />

                    <p className="text-center flex-row flex-wrap m-5 p-5">Eric Lee is the creator of this site and is a lifelong gamer with a passion for good game experiences. After spending many years watching news sites review games, they noticed a pattern! These sites SUCKED at actually informing consumers about the product purchases they are making. Thus, Eric took it upon themself to fix a longstanding problem with games media, the overly relied upon 0-10 scoring system.</p>  
            </div>
        </>
    )
}