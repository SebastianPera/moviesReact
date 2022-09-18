import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Search.module.css";

export function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText("");
    e.target.reset();
    navigate("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Movies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
