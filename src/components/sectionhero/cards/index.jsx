"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mockup from "/public/mockup-main.png";
import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  const section = sectionRef.current;

  const cards01Ref = useRef(null);
  const cards02Ref = useRef(null);
  const cards03Ref = useRef(null);
  const cards04Ref = useRef(null);
  const cards05Ref = useRef(null);
  const cards06Ref = useRef(null);

  function animateCards(cards, position) {
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          stagger: 0.2,
          start: "60% center",
        },
      }
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    const cards01 = cards01Ref.current;
    const cards02 = cards02Ref.current;
    const cards03 = cards03Ref.current;
    const cards04 = cards04Ref.current;
    const cards05 = cards05Ref.current;
    const cards06 = cards06Ref.current;

    const leftCards = [cards01, cards02, cards03];
    const rightCards = [cards04, cards05, cards06];

    animateCards(leftCards, 50);
    animateCards(rightCards, -50);

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "60% center",
        },
      }
    );
  }, []);

  return (
    <section className="w-full pb-20" ref={sectionRef}>
      <Image
        src={Mockup}
        alt="celular com uma garota"
        className=" sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupRef}
      />

      <h2
        className="text-center text-7xl font-semibold text-black mb-56 opacity-0"
        ref={titleRef}
      >
        Faça <span className="text-green-title-card">você</span> mesmo de casa
      </h2>

      <div className="relative w-full max-w-area-cards mx-auto h-area-cards">
        <Image
          src={Card01}
          alt="card 01"
          className="absolute top-8 left-44"
          ref={cards01Ref}
        />
        <Image
          src={Card02}
          alt="card 02"
          className="absolute left-0 bottom-32"
          ref={cards02Ref}
        />
        <Image
          src={Card03}
          alt="card 03"
          className="absolute bottom-0 left-80"
          ref={cards03Ref}
        />
        <Image
          src={Card04}
          alt="card 04"
          className="absolute top-0 right-32"
          ref={cards04Ref}
        />
        <Image
          src={Card05}
          alt="card 05"
          className="absolute right-0 bottom-28"
          ref={cards05Ref}
        />
        <Image
          src={Card06}
          alt="card 06"
          className="absolute bottom-0 right-80"
          ref={cards06Ref}
        />
      </div>
    </section>
  );
}
