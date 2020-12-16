import { HeaderMenu } from '../../styles/header'
import Link from 'next/link'

function Header() {
    return (
        <HeaderMenu>
            <Link href="/"> 
                <a>DevPlay</a>
            </Link>
        </HeaderMenu>    
    )
}

export default Header