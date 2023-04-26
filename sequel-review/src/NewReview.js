import React, {useState} from "react";

function NewReview() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [review, setReview] = useState("")
    const [score, setScore] = useState(0)

    return(
        <div>
            <form>
                <input type="text" name="title" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)}></input>
                <input type="text" name="image" placeholder="Movie Poster" onChange={(e) => setImage(e.target.value)}></input>
                <input type="text" name="synopsis" placeholder="Movie Synopsis/ Brief Overview" onChange={(e) => setSynopsis(e.target.value)}></input>
                <input type="text" name="review" placeholder="Your Review" onChange={(e) => setReview(e.target.value)}></input>
                <input type="text" name="title" placeholder="Give your score 1-5" onChange={(e) => setScore(e.target.value)}></input>
            </form>

        </div>
        
    )
}

export default NewReview