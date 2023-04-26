import React from "react";

function ReviewCard({movie}) {
    return(
        <li>
          <div>
            <img src={movie.image} alt={movie.title}/>
            <span>{`${movie.score}/5`}</span>
          </div>
          <strong>{movie.title}</strong>
          <div id="details">
            <p>{movie.synopsis}</p>
            <p>{movie.review}</p>
          </div>
        </li>
    )
}

export default ReviewCard