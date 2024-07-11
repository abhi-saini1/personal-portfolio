import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapAnimation: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateFrom = (elem: HTMLElement, direction: number = 1) => {
      let x = 0,
        y = direction * 100;

      if (elem.classList.contains('reveal_left')) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains('reveal_right')) {
        x = 100;
        y = 0;
      }
      elem.style.transform = `translate(${x}px, ${y}px)`;
      elem.style.opacity = '0';

      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto'
        }
      );
    };

    const hide = (elem: HTMLElement) => {
      gsap.set(elem, { autoAlpha: 0 });
    };

    gsap.utils.toArray('.gs_reveal').forEach((elem: HTMLElement) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => {
          animateFrom(elem);
        },
        onEnterBack: () => {
          animateFrom(elem, -1);
        },
        onLeave: () => {
          hide(elem);
        }
      });
    });
  }, []);

  return null;
};

export default GsapAnimation