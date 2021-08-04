import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Movies.module.css";

const Movies = ({ searchedTitle, rating }) => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    async function getMovies() {
      const url = searchedTitle
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/discover/movie";

      const response = await axios({
        method: "get",
        url: url,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: searchedTitle,
          page: activePage,
        },
      });
      if (activePage > 1) {
        setMovies([...movies, ...response.data.results]);
      } else {
        setMovies(response.data.results);
      }
    }
    getMovies();
    // eslint-disable-next-line
  }, [searchedTitle, activePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        console.log("ok");
        setActivePage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActivePage]);

  const filtro = movies
    // .filter((movie) => movie.vote_average >= rating)
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
    );

  return (
    <>
      {filtro.map((mov) => (
        <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6  mb-4  mt-3">
          <Link to={`/pelicula/${mov.id}`}>
            <div
              className={`card  text-white  rounded-3 border-0 ${styles.movieContent} m-2`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                className={`${styles.imageMovie} rounded-3 p-0 shadow`}
                alt="..."
              />

              <div
                className={`d-flex justify-content-between align-items-center p-2 rounded-bottom ${styles.imageBanner} text-start m-0  bg-dark `}
              >
                <div className="d-flex  flex-column">
                  <h5 className="fs-6  m-0 d-flex align-items-end">
                    <strong>{mov.title}</strong>
                  </h5>
                  <p className="text-truncate">
                    <i>{mov.overview} </i>
                  </p>
                </div>

                <div className="d-flex  align-items-center  justify-content-center">
                  <span className="text-end ms-2">
                    <i className="fas fa-heart me-1"></i> {mov.vote_count}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      {/* <button
        className="btn btn-primary"
        onClick={() => setActivePage((prev) => prev + 1)}
      >
        Next
      </button> */}
    </>
  );
};

export default Movies;
/* <i class="fas fa-star"></i>;

!filtro.length ? (
  <h1>Mírate el dedo porque no tenemos la peli que buscas!</h1>
) : */
