import { HeaderMenu, SearchInput } from '../../styles/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <HeaderMenu>
            <Link href="/"> 
                <a>DevPlay</a>
            </Link>
            <form>
                <SearchInput placeholder="Procurar..." name="search" />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch}  />
                </button>
            </form>
        </HeaderMenu>    
    )
}

export default Header