import React from "react";
import styles from "./Header.module.css";

const Header = ({ searchedTitle, setSearchedTitle }) => {
  const handleChange = (event) => {
    setSearchedTitle(event.target.value);
  };

  return (
    <>
      <div className={styles.bgMainImage}>
        <div
          className={`d-flex align-items-center justify-content-center text-center text-white ${styles.headerStyle}`}
        >
          <div className="">
            <h1 className="">Tus películas favoritas.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, laboriosam?
            </p>

            <div class="input-group mt-5">
              <input
                value={searchedTitle}
                onChange={handleChange}
                id="searchedTitle"
                name="searchedTitle"
                type="text"
                className="form-control fs-5 bg-dark text-white border-0 p-3 rounded-pill"
                placeholder=" Busca tu película..."
                ariaLabel="Recipient's username"
                ariaDescribedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
