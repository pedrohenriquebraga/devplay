import { 
    FeaturedVideosContainer, 
    FeaturedVideosGrid,
    FeaturedVideoMain,
    FeaturedVideosAside } from '../../styles/FeaturedVideos'
import Link from 'next/link'

function FeaturedVideos(props) {
    return (
        <FeaturedVideosContainer>
            <FeaturedVideosGrid>
                <Link href="#">
                	<a>
                	    <FeaturedVideoMain>
                	        <img src="https://picsum.photos/1280/720" />
                            <h2>Veja como usar Next.js em um único vídeo!</h2>
                            <p>100 mil visualizações</p>
                            <Link href="#">
                                <a>Rocketseat</a>
                            </Link>
                	    </FeaturedVideoMain>
                	</a>
                </Link>
                <FeaturedVideosAside>
                    
                </FeaturedVideosAside>
            </FeaturedVideosGrid>
        </FeaturedVideosContainer>
    )
}

export default FeaturedVideos