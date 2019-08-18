import React from 'react';

const Tile = ({title, rating, poster_img, description}) =>{
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={poster_img} className="card-img-top" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text"> Rating: {rating}</p>
                <p className="card-text"> {description} </p>
            </div>
        </div>
    )
}

export default Tile; 