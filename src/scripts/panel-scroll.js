console.log("chicking my panel scroll jejejejej")
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const panels = gsap.utils.toArray(".panel");

panels.forEach((panel, i) => {
  /* const isLast = i === panels.length - 1;

  if (isLast) return; */

  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

/* ScrollTrigger.create({
    snapTo: 1 / 2,
});

ScrollTrigger.normalizeScroll(true); */