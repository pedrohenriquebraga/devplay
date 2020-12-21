import { useRouter } from "next/router";
import Header from "../src/components/Header"
import SearchResults from "../src/components/SearchResults"

function Search() {
    const router = useRouter()
    const { search } = router.query

  return (
      <>
        <Header />
        <SearchResults query={search} />
      </>
  );
}

export default Search;
