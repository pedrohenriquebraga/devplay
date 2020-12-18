import { 
    MoreVideosContainer, 
    MoreVideoCard,
    MoreVideoThumb,
    MoreVideoContent, 
    VideosCardContainer ,
} from '../../styles/MoreVideos';
import Link from 'next/link'
import Image from 'next/image'

function MoreVideos() {
  return (
    <MoreVideosContainer>
        <h2>Mais vídeos</h2>
        <VideosCardContainer>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        <MoreVideoCard>
          <Link href="#">
            <a>
              <MoreVideoThumb>
                <span className="videoDuration">18:35</span>
                <Image
                  loading="lazy"
                  quality={70}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  src="https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg"
                />
              </MoreVideoThumb>
              <MoreVideoContent>
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
              </MoreVideoContent>
            </a>
          </Link>
        </MoreVideoCard>
        </VideosCardContainer>
    </MoreVideosContainer>
  )
}

export default MoreVideos;