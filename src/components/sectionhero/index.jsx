"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { GridContainer } from "../container";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
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
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="mockup cellular"
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
