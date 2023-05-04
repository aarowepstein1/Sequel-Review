import React, {useState} from "react";

function ReviewCard({movie}) {
    const [showDetails, toShowDetails] = useState(false)

    function handleClick() {
        toShowDetails(!showDetails)
    }
    return(
        <li id="review">
          <div>
            <img id="poster" onClick={handleClick} src={movie.image} alt={movie.title}/>
            <span id="score">{`${movie.score}/5`}</span>
          </div>
          <h3>{movie.title}</h3>
          {showDetails ? <div id="details">
            <p>{movie.synopsis}</p>
            <p>{movie.review}</p>
          </div> : null}
        </li>
    )
}

export default ReviewCard