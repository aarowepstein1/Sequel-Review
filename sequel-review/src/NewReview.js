import React, {useState} from "react";

function NewReview() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [review, setReview] = useState("")
    const [score, setScore] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        const newReviewData = {
            
        }

    }
    // Setting input fields and forms so we can track their value so we can keep track of what a user types and vice versa if the state changes then value in the input field changes
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Movie Title:</label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                <label>Movie Poster Link:</label>
                <input type="text" name="image" onChange={(e) => setImage(e.target.value)}></input>
                <label>Movie Synopsis:</label>
                <input type="text" name="synopsis" onChange={(e) => setSynopsis(e.target.value)}></input>
                <label>Your Review:</label>
                <input type="text" name="review" onChange={(e) => setReview(e.target.value)}></input>
                <label>Your Score:</label>
                <input type="text" name="score" placeholder="1-5" onChange={(e) => setScore(e.target.value)}></input>
                <button type="submit" >Add Review</button>
            </form>

        </div>
        
    )
}

export default NewReview