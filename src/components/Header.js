import { HeaderMenu } from "../../styles/header";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <HeaderMenu>
      <Link href="/">
        <a>
          DevPlay
        </a>
      </Link>
    </HeaderMenu>
  );
}

export default Header;
