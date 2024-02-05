import Image from "next/image";
import Link from "next/link";
import { GridContainer } from "../gridcontainer";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
  const activedStyled = "bg-green-actived text-opacity-100 rounded-full";
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-start gap-20">
          <Image src={LogoImg} alt="Logo" />
        </div>

        <nav className="flex gap-2">
          {arrayMenu.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                index === 0 ? activedStyled : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button>
            <Image src={SearchIcon} alt="icone de busca" />
          </button>
          <button className="flex items-center gap-2">
            <Image src={IconUser} alt="icone de usuário" />
            <span className="text-white font-medium">Fazer Login</span>
          </button>
        </div>
      </GridContainer>
    </header>
  );
}
