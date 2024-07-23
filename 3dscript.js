const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};

var tl = gsap.timeline();

function animate() {
  if (window.innerWidth > 1024) {
    // Create a timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#six-section .d3-div",
        scroller: "#main",
        start: "top 10%",
        end: "630%",
        // markers: true,
        pin: true,
        scrub: true,
      },
    });

    // First animation
    tl.to("#six-section .d3-div", {
      x: "-90%",
      rotate: "45deg",
    });

    // Second animation (chained)
    tl.to("#six-section .d3-div", {
      x: "10%",
      rotate: "-45deg",
      scale: "1.3",
    });

    tl.to("#six-section .d3-div", {
      x: "-70%",
      rotate: "45deg",
      scale: ".6",
    });

    tl.to("#six-section .d3-div", {
      x: "-70%",
      rotate: "90deg",
      scale: "1",
    });
  }
}

// Call the function to execute animations
animate();
