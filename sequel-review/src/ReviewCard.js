import React, {useState} from "react";

function ReviewCard({movie}) {
    const [showDetails, toShowDetails] = useState(false)

    function handleClick() {
        toShowDetails(!showDetails)
    }
    return(
        <li id="review">
          <div>
            <img onClick={handleClick} src={movie.image} alt={movie.title}/>
            <span>{`${movie.score}/5`}</span>
          </div>
          <strong>{movie.title}</strong>
          {showDetails ? <div id="details">
            <p>{movie.synopsis}</p>
            <p>{movie.review}</p>
          </div> : null}
        </li>
    )
}

export default ReviewCard