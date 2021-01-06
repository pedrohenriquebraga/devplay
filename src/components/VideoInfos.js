import Link from "next/link";
import {
  VideoTitle,
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
                  <a>Padrão Devplay</a>
                </Link>
              </p>
            </div>
          </ExtraInfos>
      </VideoDescription>
    </>
  );
}

export default VideoInfos;
