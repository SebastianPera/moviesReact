import { Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from './pages/MovieDetails';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
      </header>
    </div>
  );
}

export default App;
