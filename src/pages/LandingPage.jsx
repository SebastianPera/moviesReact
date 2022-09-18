import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "./../components/Search";
import { useSearchParams } from 'react-router-dom';

export function LandingPage() {
  
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div>
      <Search />
      <MoviesGrid key={search} search={search} />
    </div>
  );
}
 