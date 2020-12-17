import { 
    VideoCard, 
    VideosScrollingCards, 
    VideoContent, 
    VideoSections, 
    SectionTitle } from "../../styles/VideosSection";
import Link from "next/link";

import * as F from 'react-icons/fa'

export function VideosSectionsContainerComp({ sectionTitle = 'Mais vídeos'}) { 
  return (
    <VideoSections>
    <SectionTitle>{ sectionTitle }</SectionTitle>
      <VideosScrollingCards>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
          <VideoCard>
            <Link href="#">
              <a>
                <img src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg" />
                <VideoContent>
                  <h3 class="videoTitle">Como aprender NodeJs</h3>
                  <p class="videoDescription">Neste vídeo eu irei introduzir você ao NodeJs, que fez o JavaScript chegar em outro patamar. Será uma série de vídeos totalmente voltados para iniciantes</p>
                  <p class="videoDate">2 meses atrás</p>
                  <p class="videoViews">427 mil visualizações</p>
                  <Link href="#">
                    <a class="channelUrl">Umbler</a>
                  </Link>
                </VideoContent>
              </a>
            </Link>
          </VideoCard>
      </VideosScrollingCards>
    </VideoSections>
  );
}

// export default VideosSectionsContainerComp;
