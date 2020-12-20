import { HeaderMenu } from "../../styles/header";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <HeaderMenu>
      <Link href="/">
        <a>
        <Image
          src="/logo.png"
          width={60}
          height={60}
          layout="fixed"
          quality={60}
        /> DevPlay
        </a>
      </Link>
    </HeaderMenu>
  );
}

export default Header;
