
import styles from "./App.module.css"
import { MoviesGrid } from './MoviesGrid';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Movies</h1>
        <main>
          <MoviesGrid/>
        </main>
      </header>
    </div>
  );
}

export default App;
