import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = ({ searchResults, onWatchlistAdd, watchlistData }) => {
  var settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider className="mt-4 carousel" {...settings}>
      {searchResults.map((anime, i) => {
        return (
          <div
            className="animated fadeInRight slow card mb-2"
            key={searchResults[i].mal_id}
          >
            <img
              src={searchResults[i].image_url}
              className="card-img-top"
              alt={`${searchResults[i].title}-thumbnail`}
            />
            <div className="card-body text-center d-flex flex-column justify-content-around">
              <h5 className="card-title">
                <a
                  href={searchResults[i].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {searchResults[i].title}
                </a>
              </h5>
              <p className="card-text d-none d-xl-block">
                {searchResults[i].synopsis}
              </p>
              <div>
                {Object.keys(watchlistData.animes).includes(
                  searchResults[i].mal_id.toString()
                ) ? (
                  <p className="animated fadeIn">Added to Watchlist</p>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => onWatchlistAdd(searchResults[i])}
                  >
                    + Watchlist
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
