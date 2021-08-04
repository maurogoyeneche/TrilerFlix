import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Movies.module.css";

const MovieDetails = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovies() {
      const url = `https://api.themoviedb.org/3/movie/${id}`;

      const response = await axios({
        method: "get",
        url: url,
        params: {
          api_key: "700435bfc34d07235d4f51b5425753f8",
        },
      });
      setMovie(response.data);
    }
    getMovies();
  }, [id]);

  const stylo = {
    backgroundImage: `radial-gradient(circle, rgba(34,34,34,0.44616967084639503) 0%, rgba(0,0,0,0.885041144200627) 80%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundAttachment: "fixed",
    height: "100vh",
    backgroundSize: "cover",
    color: "white",
  };

  const buttonBackHome = {
    textDecoration: "none",
  };

  return (
    <div style={stylo}>
      <div className="container vh-100 d-flex justify-content-start align-items-center">
        <div className=" row">
          <Link to="/" className="mt-4 ps-1 text-white " style={buttonBackHome}>
            <i class="far fa-arrow-alt-circle-left fs-4"></i>
          </Link>
          <div className="col-md-4 p-0 g-0">
            {/* <h3>{movie.title}</h3> */}

            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className={`${styles.imageMovie} rounded-3 p-0 g-0 shadow  w-100 `}
              alt="..."
              // style={{ width: "100", height: "20rem" }}
            />
          </div>
          <div className="col-md-8">
            <div className="mb-2">raiting / puntuacion / etc</div>
            <p className=" fs-md-5 fs-xs-6" style={{ marginTop: "10px" }}>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
