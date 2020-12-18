import {
  VideoCard,
  VideosScrollingCards,
  VideoContent,
  VideoSections,
  VideoThumb,
  SectionTitle,
} from "../../styles/VideosSection";
import Link from "next/link";
import Image from "next/image";

import * as F from "react-icons/fa";

export function VideosSectionsContainerComp({ sectionTitle = "Mais vídeos" }) {
  return (
    <VideoSections>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <VideosScrollingCards>
        <VideoCard>
          <Link href="#">
            <a>
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
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
              </VideoContent>
            </a>
          </Link>
        </VideoCard>
        <VideoCard>
          <Link href="#">
            <a>
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 className="videoTitle">Como aprender NodeJs</h3>
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
              </VideoContent>
            </a>
          </Link>
        </VideoCard>
        <VideoCard>
          <Link href="#">
            <a>
              <VideoThumb>
                <span className="videoDuration">18:47:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 className="videoTitle">Como aprender NodeJs</h3>
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
              </VideoContent>
            </a>
          </Link>
        </VideoCard>
        <VideoCard>
          <Link href="#">
            <a>
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 className="videoTitle">Como aprender NodeJs</h3>
                <p className="videoDescription">
                  Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                  JavaScript chegar em outro patamar. Será uma série de vídeos
                  totalmente voltados para iniciantes
                </p>
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
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 class="videoTitle">Como aprender NodeJs</h3>
                <p class="videoDescription">
                  Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                  JavaScript chegar em outro patamar. Será uma série de vídeos
                  totalmente voltados para iniciantes
                </p>
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
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 class="videoTitle">Como aprender NodeJs</h3>
                <p class="videoDescription">
                  Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                  JavaScript chegar em outro patamar. Será uma série de vídeos
                  totalmente voltados para iniciantes
                </p>
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
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 class="videoTitle">Como aprender NodeJs</h3>
                <p class="videoDescription">
                  Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                  JavaScript chegar em outro patamar. Será uma série de vídeos
                  totalmente voltados para iniciantes
                </p>
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
              <VideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </VideoThumb>
              <VideoContent>
                <h3 class="videoTitle">Como aprender NodeJs</h3>
                <p class="videoDescription">
                  Neste vídeo eu irei introduzir você ao NodeJs, que fez o
                  JavaScript chegar em outro patamar. Será uma série de vídeos
                  totalmente voltados para iniciantes
                </p>
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
