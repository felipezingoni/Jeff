// src/components/ListItems.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/ListItems.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ListItems() {
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((item) => {
      const itemTitle = item.querySelector(".list__item__title");
      const itemTitleOutline = item.querySelector(".list__item__titleOutline");
      const itemImg = item.querySelector("img");

      const itemTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "0% 75%",
          end: "25% 50%",
          scrub: 3,
        },
      });

      itemTL.fromTo(
        itemTitle,
        { scale: 2, y: "100%" },
        { scale: 1, y: "0%", ease: "power2.inOut" },
        0
      );
      itemTL.fromTo(
        itemTitleOutline,
        { scale: 2, y: "100%" },
        { scale: 1, y: "0%", ease: "power2.inOut" },
        0
      );

      gsap.fromTo(
        itemImg,
        { x: "60vw", y: "60vh", rotate: -30 },
        {
          x: "-60vw",
          y: "-60vh",
          rotate: 30,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "50% 100%",
            end: "100% 50%",
            scrub: 3,
          },
        }
      );
    });
  }, []);

  return (
    <main className="flex__col">
      <section className="overlay-trigger-section">
        <h2>Siguiente Feature</h2>
      </section>

      {/* ITEM 1 */}
      <div
        className="list__item flex"
        ref={(el) => (itemRefs.current[0] = el)}
      >
        <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081277/Jeff/Captura_de_pantalla_2023-11-17_a_la_s_17.21.50_zcowyl.png" />
        <div className="list__item__title">Web development</div>
        <div className="list__item__titleOutline">Web development</div>
      </div>

      {/* ITEM 2 */}
      <div
        className="list__item flex"
        ref={(el) => (itemRefs.current[1] = el)}
      >
        <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081876/Jeff/image18_nq8cd3.png" />
        <div className="list__item__title">UI & UX Design</div>
        <div className="list__item__titleOutline">UI & UX Design</div>
        <div className="list__item__type">WEBSITE</div>
        <div className="list__item__project">PORTFOLIO</div>
      </div>

      {/* ITEM 3 */}
      <div
        className="list__item flex" style={{ marginBottom: "200px" }}
        ref={(el) => (itemRefs.current[2] = el)}
      >
        <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081282/Jeff/image14_ajegec.jpg" />
        <div className="list__item__title">E-commerce Development</div>
        <div className="list__item__titleOutline">E-commerce Development</div>
        {/* <ul className="list__item__infos flex">
          <li>
            <span>AGENCY</span> OKADA AGENTS
          </li>
          <li>
            <span>ROLE</span> LEAD DESIGNER / DEVELOPER
          </li>
          <li>
            <span>CLIENT</span> ROBERTO STUDIO
          </li>
          <li>
            <span>YEAR</span> 2023
          </li>
        </ul>
        <div className="list__item__type">WEBSITE</div>
        <div className="list__item__project">PORTFOLIO</div> */}
      </div>
    </main>
  );
}
