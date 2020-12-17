import Header from "../src/components/Header";
import FeaturedVideoComp from "../src/components/FeaturedVideo";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchForm } from "../styles/Form";
import { VideosSectionsContainer } from '../styles/VideosSection'
import { VideosSectionsContainerComp } from "../src/components/VideosSectionsContainer"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <SearchForm>
        <h2>O que você precisa hoje?</h2> <br />
        <div>
          <input
            type="search"
            placeholder="Procurar..."
            name="search"
            spellCheck
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </SearchForm>
        <FeaturedVideoComp />
      <VideosSectionsContainer>
        <VideosSectionsContainerComp sectionTitle="Javascript" sectionIcon="FaJsSquare" />
        <VideosSectionsContainerComp />
      </VideosSectionsContainer>
    </>
  );
}
