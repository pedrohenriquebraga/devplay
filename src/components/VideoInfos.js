import Link from "next/link";
import { BiLike, BiDislike, BiShare } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";
import { MdDateRange, MdPeopleOutline } from "react-icons/md";
import {
  VideoTitle,
  VideoStatistics,
  VideoDescription,
  Description,
  ExtraInfos,
} from "../../styles/VideoInfos";

function VideoInfos() {

  return (
    <>
      <VideoTitle>
        Como migrar um projeto de HTML/CSS para ReactJs de forma fácil?
      </VideoTitle>
      <VideoStatistics>
        <p className="postedDate">
          <MdDateRange /> 28/01/2020
        </p>
        <p className="views">
          <MdPeopleOutline /> 280.958 visualizações
        </p>
        <div className="ActionsContainer">
          <div className="RateContainer">
            <div className="Like Rate">
              <button className="LikeButton RateButton">
                <BiLike />
                <span className="RateCounter LikeCounter">100 mil</span>
              </button>
            </div>
            <div className="Dislike Rate">
              <button className="DisLikeButton RateButton">
                <BiDislike />
                <span className="RateCounter DisLikeCounter">101</span>
              </button>
            </div>
          </div>
          <button className="ShareButton">
            <BiShare />
            <span>Compartilhar</span>
          </button>
          <button className="DenounceButton">
            <AiOutlineWarning />
            <span>Denunciar</span>
          </button>
        </div>
      </VideoStatistics>
      <VideoDescription>
        <summary>Mais informações</summary>
        <Description>
          Neste vídeo eu respondo algumas perguntas feitas por vocês e dou
          sugestões de como você pode migrar projetos feitos HTML/CSS para
          ReactJs de forma bem fácil. Veja o vídeo até o final
          <br />
          <br />
          👍 Deixe seu Like
          <br />
          🔔 Ative às notificações
        </Description>
        <ExtraInfos>
          <div className="infos">
            <p className="categories">
              <strong>Categorias: </strong>
              <Link href="#">
                <a>JavaScript</a>
              </Link>
              ,{" "}
              <Link href="#">
                <a>Web design</a>
              </Link>
            </p>
            <p className="license">
              <strong>Licença: </strong>
              <Link href="#">
                <a>DevPlay</a>
              </Link>
            </p>
          </div>
        </ExtraInfos>
      </VideoDescription>
    </>
  );
}

export default VideoInfos;
