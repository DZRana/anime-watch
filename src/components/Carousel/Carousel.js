import React from "react";

const Carousel = ({ searchResults }) => {
  return (
    <div className="d-inline-flex">
      {searchResults.map((anime, i) => {
        return (
          <div className="animated fadeInRight slow card">
            <img
              src={searchResults[i].image_url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{searchResults[i].title}</h5>
              <p className="card-text">{searchResults[i].synopsis}</p>
              <button className="btn btn-primary">Go somewhere</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
