import { useRouter } from 'next/router'
import Header from "../src/components/Header";
import FeaturedVideoComp from "../src/components/FeaturedVideo";
import { FaSearch } from "react-icons/fa"
import { SearchForm } from "../styles/Form";
import { VideosSectionsContainer } from '../styles/VideosSection'
import { VideosSectionsContainerComp } from "../src/components/VideosSectionsContainer"
import MoreVideos from "../src/components/MoreVideos"
import { useState } from 'react';

export default function Home() {

  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search) {
      router.push({
        pathname: '/search',
        query: {search: search}
      })
    }
  }
  return (
    <>
      <Header />
      <SearchForm onSubmit={handleSubmit}>
        <h2>O que você precisa hoje?</h2> <br />
        <div>
          <input
            type="search"
            placeholder="Procurar..."
            name="search"
            maxLength="100"
            onChange={(e) => setSearch(e.target.value)}
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
