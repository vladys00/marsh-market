console.log("chicking my panel scroll jejejejej")
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".panel").forEach((panel) => {
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