import Image from "next/image";

import LogoImg from "/public/logo.svg";

export function Header() {
  return (
    <header>
      <div>
        <Image src={LogoImg} alt="Logo" />
      </div>
    </header>
  );
}
