import Image from "next/image";
import { GridContainer } from "../container";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo Curso focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-8">
            Destrave suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="Icone de arquivo" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>

        <div className="relative max-w-area-icons w-full h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icone palmas"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icone palmas"
            className="absolute right-0 top-0"
          />
        </div>

        <div className="absolute -bottom-52 w-full max-w-area-mockup flex justify-between">
          <Image
            src={IconMockup}
            alt="mockup cellular"
            className="relative -rotate-12 top-[1.1rem] left-[3.3rem] "
          />
          <Image
            src={IconMockup}
            alt="mockup cellular"
            className="relative rotate-12 top-[1.1rem] right-[3.3rem]"
          />
        </div>
      </GridContainer>
    </section>
  );
}
