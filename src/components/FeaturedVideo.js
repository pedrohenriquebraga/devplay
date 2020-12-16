import {
  FeaturedVideoContainer,
  FeaturedVideo,
} from "../../styles/FeaturedVideo";
import Link from "next/link";

function FeaturedVideoComp(props) {
  return (    
    <FeaturedVideoContainer>
        <h1>Vídeo em Destaque</h1>
      <Link href="#">
        <a class="openVideo">
          <FeaturedVideo>
            <img class="videoThumb" src="https://i.ytimg.com/vi/H3UYwZVtvPc/maxresdefault.jpg" />
            <div>
                <h2 class="videoTitle">Como se tornar um grande programador e ter espaço no mercado de trabalho de grandes desenvolvedores (Método 2020)!!</h2>
                <p class="videoDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti. Ullamcorper a lacus vestibulum sed. Urna neque viverra justo nec ultrices dui sapien eget. Felis imperdiet proin fermentum leo vel orci porta. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Quam nulla porttitor massa id neque aliquam. Erat nam at lectus urna duis convallis convallis. In dictum non consectetur a erat nam at. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Quis imperdiet massa tincidunt nunc. Vulputate ut pharetra sit amet aliquam. Vel eros donec ac odio tempor orci dapibus. Nisl nisi scelerisque eu ultrices vitae. Faucibus turpis in eu mi. Lobortis mattis aliquam faucibus purus in massa. Feugiat sed lectus vestibulum mattis ullamcorper. Vulputate enim nulla aliquet porttitor lacus luctus. Facilisis gravida neque convallis a cras.</p>
                <p class="videoDate">2 meses atrás</p>
                <p class="videoViews">100 mil visualizações</p>
                <Link href="#">
                    <a class="videoAuthor">Programador Br</a>
                </Link>
            </div>
          </FeaturedVideo>
        </a>
      </Link>
    </FeaturedVideoContainer>
  );
}

export default FeaturedVideoComp;
