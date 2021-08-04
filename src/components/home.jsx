import React from "react";
import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
// import Rating from "react-rating";

const Home = () => {
  const [searchedTitle, setSearchedTitle] = useState("");
  //   const [rating, setRating] = useState(null);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header
        searchedTitle={searchedTitle}
        setSearchedTitle={setSearchedTitle}
      />

      <div className="container mt-5">
        <div className="row">
          <Movies searchedTitle={searchedTitle} />
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Home;

/* {!searchedTitle && (
        <>
          <div className="mt-4">Fliltra por rating</div>
          <div className="text-warning">
            <Rating
              stop={10}
              step={2}
              fractions={2}
              emptySymbol="far fa-star fa-2x"
              fullSymbol="fas fa-star fa-2x"
              onChange={(rate) => setRating(rate)}
              initialRating={rating}
            />
          </div>
        </>
      )} */
