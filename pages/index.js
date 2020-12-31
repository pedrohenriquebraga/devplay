import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react';
import { findBestMatch } from 'string-similarity'
import Header from "../src/components/Header";
import FeaturedVideoComp from "../src/components/FeaturedVideo";
import { FaSearch, FaHistory } from "react-icons/fa"
import { SearchForm } from "../styles/Form";
import { VideosSectionsContainer } from '../styles/VideosSection'
import { VideosSectionsContainerComp } from "../src/components/VideosSectionsContainer"
import MoreVideos from "../src/components/MoreVideos"

export default function Home() {

  const router = useRouter()
  const searches = useRef()
  const form = useRef()
  const inputField = useRef()
  const [search, setSearch] = useState('')
  const [lastSearches, setLastSearches] = useState([])
  const [searchesList, setSearchesList] = useState([])

  useEffect(() => {
    setLastSearches(() => {
      const storageValue = JSON.parse(localStorage.getItem('historySearch'))
      if (storageValue) {
        setSearchesList(storageValue)
        return storageValue
      } return []
    })
  }, [])

    const searchUpdate = (e) => {
    setSearch(e.target.value)

    if (!e.target.value || e.target.value <= 1) {
      return searches.current.classList.remove('show')
    } else {
      if (lastSearches.length == 0) return

      const bestMatches = findBestMatch(e.target.value, lastSearches)
        .ratings || []
        .sort((a, b) => a.rating > b.rating ? -1 : b.rating > a.rating ? 1 : 0)


      setSearchesList(bestMatches.map(match => { 
        if (match.rating.toFixed(2) >= 0.25) {
          return match.target 
        } else return ''
      }))
      return searches.current.classList.add('show')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search) {
      const historySearch = JSON.parse(localStorage.getItem('historySearch')) || []

      if (historySearch.indexOf(search) === -1) {
        historySearch.push(search)
        localStorage.setItem('historySearch', JSON.stringify(historySearch))
      }

      router.push({
        pathname: '/search',
        query: {search: search}
      })
    }
  }
  return (
    <>
      <Header />
      <SearchForm ref={form} onSubmit={handleSubmit}>
        <h2>Do que você precisa hoje?</h2> <br />
        <div className="searchContainer">
          <div className="inputContainer">
            <div className="inputField">
              <input
                type="search"
                placeholder="Procurar..."
                name="search"
                ref={inputField}
                maxLength="100"
                onChange={(e) => searchUpdate(e)}
                spellCheck
              />
              <ul className="lastSearches" ref={searches}>
                { searchesList.map((search, index) => {
                  if (!search) return
                  return (
                  <li
                    key={index} 
                    onClick={(e) => {
                      setSearch(e.target.innerText.trim())
                      inputField.current.value = e.target.innerText.trim()
                    }}
                  ><FaHistory /> {search}</li>)
                }) }
              </ul>
            </div>
            <button type="submit">
            <FaSearch />
          </button>
          </div>
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
