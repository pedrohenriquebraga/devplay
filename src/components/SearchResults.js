import {
  SearchResultsContainer,
  ResultsContainer,
  VideoResult,
  VideoData,
  VideoThumbnail
} from "../../styles/Search";
import Link from "next/link";
import Image from "next/image";

function SearchResults({ query }) {
  return (
    <SearchResultsContainer>
      <p>
        Foi encontrado 10 mil resultados para a busca: "<strong>{query}</strong>
        "
      </p>
      <hr />
      <ResultsContainer>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
          <VideoResult>
            <Link href="#">
              <a>
                <VideoThumbnail>
                  <span className="videoDuration">18:35</span>
                  <Image
                    loading="lazy"
                    quality={70}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                  />
                </VideoThumbnail>
                <VideoData>
                  <h3 className="videoTitle">
                    Como aprender NodeJs e javascript em um vídeo de 5 minutos
                  </h3>
                  <p className="videoDescription">
                    Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                    JavaScript chegar em outro patamar. Será uma série de vídeos
                    totalmente voltados para iniciantes
                  </p>
                  <p className="videoDate">2 meses atrás</p>
                  <p className="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a className="channelUrl">Umbler</a>
                  </Link>
                </VideoData>
              </a>
            </Link>
          </VideoResult>
      </ResultsContainer>
    </SearchResultsContainer>
  );
}

export default SearchResults;
