import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "./../components/Search";

export function LandingPage() {
   
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
 