import { useRouter } from "next/router";
import Header from "../src/components/Header"

function pages() {
    const router = useRouter()
    const { search } = router.query

  return (
      <>
      <Header />
        <h1>
            Search: { search }
        </h1>
      </>

  
  );
}

export default pages;
