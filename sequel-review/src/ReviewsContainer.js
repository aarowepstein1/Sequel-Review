import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContainer({movies}) {
    return (
        <main>
            <h1>Reviews</h1>
            <p>Click on an image to see more details</p>
            <ul>
                {movies.map((movie) => (<ReviewCard 
                key={movie.id}
                movie={movie}
                />
                ))}
            </ul>
        </main>
    )
}

export default ReviewsContainer