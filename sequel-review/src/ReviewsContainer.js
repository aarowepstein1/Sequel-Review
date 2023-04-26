import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContainer({movies}) {
    return (
        <main>
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