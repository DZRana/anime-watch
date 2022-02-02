import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAnimes } from "../../../../actions";

const Carousel = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const user = useSelector((state) => state.user);
  const { watchlistData } = user;
  const dispatch = useDispatch();

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
          slidesToScroll: 3,
        },
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
          slidesToScroll: 2,
        },
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
          slidesToScroll: 1,
        },
      },
    ],
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
              className="card-img-top w-full"
              alt={`${searchResults[i].title}-thumbnail`}
            />
            <div className="card-body text-center text-white flex flex-col">
              <h5 className="hover:transition-opacity hover:opacity-70 duration-1000 font-bold text-xl m-auto">
                <a
                  href={searchResults[i].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {searchResults[i].title}
                </a>
              </h5>
              <p className="custombp:hidden m-auto">
                {searchResults[i].synopsis}
              </p>
              <div>
                {Object.keys(watchlistData.animes).includes(
                  searchResults[i].mal_id.toString()
                ) ? (
                  <p className="animated fadeIn font-bold text-green-300 m-auto mb-5">
                    Added to Watchlist
                  </p>
                ) : (
                  <button
                    className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mb-5"
                    onClick={() =>
                      dispatch(updateUserAnimes(user, searchResults[i]))
                    }
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
