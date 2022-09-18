import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

export function Search() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();  
    e.target.reset();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Movies"
          aria-label="Search Movies"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value)
          }}
        />
        <FaSearch color="black" className={styles.searchButton} size={20} />
      </div>
    </form>
  );
}
