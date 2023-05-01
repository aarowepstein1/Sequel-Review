import React, {useState} from "react";


function NewReview({ onAddReview }) {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [review, setReview] = useState("")
    const [score, setScore] = useState(0)
    

    function handleSubmit(e) {
        e.preventDefault()
        const newReviewData = {
            title: title, 
            image:image, 
            synopsis: synopsis, 
            review: review, 
            score: score
        }
        fetch("http://localhost:4000/reviews", {
		      method: "POST",
		      headers: {
		        "Content-Type": "application/json",
		      },
		      body: JSON.stringify(newReviewData),
		    })
		    .then((r) => r.json())
            //using callback function to lift the new review
            .then((newReview) => onAddReview(newReview));
        setTitle('')
        setImage('')
        setSynopsis('')
        setReview('')
        setScore(null)
    }
    
    return(
        <div>
            <h1>New Review</h1>
            <form id="form" onSubmit={handleSubmit}>
                <div>
                    <label>Movie Title:</label>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <label>Movie Poster Link:</label>
                    <input type="text" name="image" onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <div>
                    <label>Movie Synopsis:</label>
                    <br></br>
                    <textarea type="text" name="synopsis" onChange={(e) => setSynopsis(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Your Review:</label>
                    <br></br>
                    <textarea type="text" name="review" onChange={(e) => setReview(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Your Score:</label>
                    <input type="text" name="score" placeholder="1-5" onChange={(e) => setScore(e.target.value)}></input>
                </div>
                <button type="submit">Add Review</button>
            </form>
            <p>Please add your review here then return to Reviews and see it there.</p>

        </div>
        
    )
}

export default NewReview