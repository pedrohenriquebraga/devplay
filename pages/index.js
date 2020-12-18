import Header from "../src/components/Header";
import FeaturedVideoComp from "../src/components/FeaturedVideo";
import { FaSearch } from "react-icons/fa"
import { SearchForm } from "../styles/Form";
import { VideosSectionsContainer } from '../styles/VideosSection'
import { VideosSectionsContainerComp } from "../src/components/VideosSectionsContainer"
import MoreVideos from "../src/components/MoreVideos"

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
            <FaSearch />
          </button>
        </div>
      </SearchForm>
        <FeaturedVideoComp />
      <VideosSectionsContainer>
        <VideosSectionsContainerComp sectionTitle="Javascript" />
        <VideosSectionsContainerComp sectionTitle="PHP" />
      </VideosSectionsContainer>
      <MoreVideos />
    </>
  );
}
