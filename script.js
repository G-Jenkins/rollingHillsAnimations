document.addEventListener("DOMContentLoaded", () => {
  // Corrected IDs to match the HTML
  const textPathDonate = document.querySelector("#textPathDonate");
  const rainbowTextPath = document.querySelector("#rainbowTextPath");
  const dropText = document.querySelector("#dropText");
  const textPathRainbowDonate = document.querySelector("#textPathRainbowDonate");

  if (textPathDonate) {
    gsap.fromTo(textPathDonate,
      { attr: { startOffset: "100%" } },
      {
        duration: 12,
        attr: { startOffset: "-100%" },
        ease: "linear",
        repeat: -1
      });
  }

  if (rainbowTextPath) {
    gsap.fromTo(rainbowTextPath,
      { attr: { startOffset: "100%" } },
      {
        duration: 12,
        attr: { startOffset: "-100%" },
        ease: "linear",
        repeat: -1
      });
  }

  if (dropText) {
    gsap.fromTo(dropText,
      { y: 11, opacity: 0.0 },
      {
        y: -65,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 2
      });
  }

  if (textPathRainbowDonate) {
    gsap.fromTo(textPathRainbowDonate,
      { attr: { startOffset: "100%" } },
      {
        duration: 12,
        attr: { startOffset: "-100%" },
        ease: "linear",
        repeat: -1
      });
  }

  gsap.to("#rotatingText", {
    rotation: -360,
    transformOrigin: "center center",
    duration: 8,
    repeat: -1,
    ease: "linear"
  });
});