function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  locoScroll.on("scroll", (instance) => {
    let currentScroll = instance.scroll.y;

    // console.log(lastScrollTop, "lastScrollTop");
    // console.log(currentScroll, "currentScroll");

    if (currentScroll > lastScrollTop && currentScroll > 100) {  // Only hide if scrolled more than 100px
      navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScrollTop || currentScroll <= 100) {
      navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure lastScrollTop is never negative
  });

  document.body.style.backgroundColor = '#352328';

  const sections = document.querySelectorAll('section');
  const colors = ['#f0f0f0', '#e0e0e0', '#d0d0d0', 'transparent','transparent', '#352328', '#ffe9cb', '#ffe9cb', '#352328','#352328','#352328','#352328','#352328','#ffe9cb','#C4B391','#C4B391'];

  sections.forEach((section, index) => {
    const bgColor = colors[index % colors.length];
    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%', // Adjust this value if needed
      end: 'bottom 80%', // Adjust this value if needed
      // markers: true, // Enable markers to debug trigger points
      scroller: "#main", // Ensure the scroller is specified
      onEnter: () => {
        // console.log(`Entering section ${index + 1} with color ${bgColor}`);
        document.body.style.backgroundColor = bgColor;
      },
      onLeave: () => {
        // console.log(`Leaving section ${index + 1}`);
      },
      onLeaveBack: () => {
        // console.log(`Leaving section ${index + 1} while scrolling back`);
      },
      onEnterBack: () => {
        // console.log(`Re-entering section ${index + 1} with color ${bgColor}`);
        document.body.style.backgroundColor = bgColor;
      }
    });
  });

}
   
loco();

// /////////////////********************************** SECOND LOCO ********************************??////////// */
function secondLocomotiv(){
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const scrollContainer = document.querySelector("#main");

    const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed"
    });

    gsap.to(".scroll-circle", {
        clipPath: "inset(0% 0 0 0)", // Cabernet glass shape
        scrollTrigger: {
            trigger: "#main",
            scroller: scrollContainer,
            start: "top top",
            end: "bottom -770%",
            scrub: true
        }
    });
    

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
});
  
}
secondLocomotiv()











// /////////////////////////////////////////



  
function circal() {
  var main = document.querySelector("body");
  var circale = document.querySelector(".circale");
  var about = document.querySelector("#canvas-wraper")
  main.addEventListener("mousemove", function (dets) {
    gsap.to(circale, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.1,
    });
    
  });


  about.addEventListener("mouseenter", function () {
    circale.innerHTML = "Erase";
    circale.style.backgroundColor = "rgba(255, 255, 255, 0.475)";
    circale.style.color = "white";
    gsap.to(".circale", {
      scale: 5,
      // backgroundColor: "#ffffff70",
    });
  });
  about.addEventListener("mouseleave", function () {
    circale.innerHTML = "";
    gsap.to(".circale", {
      scale: 1,
      backgroundColor: "white",
    });
  });


  about.addEventListener("click",()=>{
    setTimeout(() => {
      circale.innerHTML = "";
      gsap.to(".circale", {
        scale: 1,
        backgroundColor: "white",
      });
    }, 600);(()=>{
    })
  })

}






// ///////////////******************** CANVAS WALA *****************? ??????//////////////////////// */


function canvas() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./tmp/0001.png
    ./tmp/0002.png
    ./tmp/0003.png
    ./tmp/0004.png
    ./tmp/0005.png
    ./tmp/0006.png
    ./tmp/0007.png
    ./tmp/0008.png
    ./tmp/0009.png
    ./tmp/0010.png
    ./tmp/0011.png
    ./tmp/0012.png
    ./tmp/0013.png
    ./tmp/0014.png
    ./tmp/0015.png
    ./tmp/0016.png
    ./tmp/0017.png
    ./tmp/0018.png
    ./tmp/0019.png
    ./tmp/0020.png
    ./tmp/0021.png
    ./tmp/0022.png
    ./tmp/0023.png
    ./tmp/0024.png
    ./tmp/0025.png
    ./tmp/0026.png
    ./tmp/0027.png
    ./tmp/0028.png
    ./tmp/0029.png
    ./tmp/0030.png
    ./tmp/0031.png
    ./tmp/0032.png
    ./tmp/0033.png
    ./tmp/0034.png
    ./tmp/0035.png
    ./tmp/0036.png
    ./tmp/0037.png
    ./tmp/0038.png
    ./tmp/0039.png
    ./tmp/0040.png
    ./tmp/0041.png
    ./tmp/0042.png
    ./tmp/0043.png
    ./tmp/0044.png
    ./tmp/0045.png
    ./tmp/0046.png
    ./tmp/0047.png
    ./tmp/0048.png
    ./tmp/0049.png
    ./tmp/0050.png
    ./tmp/0051.png
    ./tmp/0052.png
    ./tmp/0053.png
    ./tmp/0054.png
    ./tmp/0055.png
    ./tmp/0056.png
    ./tmp/0057.png
    ./tmp/0058.png
    ./tmp/0059.png
    ./tmp/0060.png
    ./tmp/0061.png
    ./tmp/0062.png
    ./tmp/0063.png
    ./tmp/0064.png
    ./tmp/0065.png
    ./tmp/0066.png
    ./tmp/0067.png
    ./tmp/0068.png
    ./tmp/0069.png
    ./tmp/0070.png
    ./tmp/0071.png
    ./tmp/0072.png
    ./tmp/0073.png
    ./tmp/0074.png
    ./tmp/0075.png
    ./tmp/0076.png
    ./tmp/0077.png
    ./tmp/0078.png
    ./tmp/0079.png
    ./tmp/0080.png
    ./tmp/0081.png
    ./tmp/0082.png
    ./tmp/0083.png
    ./tmp/0084.png
    ./tmp/0085.png
    ./tmp/0086.png
    ./tmp/0087.png
    ./tmp/0088.png
    ./tmp/0089.png
    ./tmp/0090.png
    ./tmp/0091.png
    ./tmp/0092.png
    ./tmp/0093.png
    ./tmp/0094.png
    ./tmp/0095.png
    ./tmp/0096.png
    ./tmp/0097.png
    ./tmp/0098.png
    ./tmp/0099.png
    ./tmp/0100.png
    ./tmp/0101.png
    ./tmp/0102.png
    ./tmp/0103.png
    ./tmp/0104.png
    ./tmp/0105.png
    ./tmp/0106.png
    ./tmp/0107.png
    ./tmp/0108.png
    ./tmp/0109.png
    ./tmp/0110.png
    ./tmp/0111.png
    ./tmp/0112.png
    ./tmp/0113.png
    ./tmp/0114.png
    ./tmp/0115.png
    ./tmp/0116.png
    ./tmp/0117.png
    ./tmp/0118.png
    ./tmp/0119.png
    ./tmp/0120.png
    ./tmp/0121.png
    ./tmp/0122.png
    ./tmp/0123.png
    ./tmp/0124.png
    ./tmp/0125.png
    ./tmp/0126.png
    ./tmp/0127.png
    ./tmp/0128.png
    ./tmp/0129.png
    ./tmp/0130.png
    ./tmp/0131.png
    ./tmp/0132.png
    ./tmp/0133.png
    ./tmp/0134.png
    ./tmp/0135.png
    ./tmp/0136.png
    ./tmp/0137.png
    ./tmp/0138.png
    ./tmp/0139.png
    ./tmp/0140.png
    ./tmp/0141.png
    ./tmp/0142.png
    ./tmp/0143.png
    ./tmp/0144.png
    ./tmp/0145.png
    ./tmp/0146.png
    ./tmp/0147.png
    ./tmp/0148.png
    ./tmp/0149.png
    ./tmp/0150.png
    ./tmp/0151.png
    ./tmp/0152.png
    ./tmp/0153.png
    ./tmp/0154.png
    ./tmp/0155.png
    ./tmp/0156.png
    ./tmp/0157.png
    ./tmp/0158.png
    ./tmp/0159.png
    ./tmp/0160.png
    ./tmp/0161.png
    ./tmp/0162.png
    ./tmp/0163.png
    ./tmp/0164.png
    ./tmp/0165.png
    ./tmp/0166.png
    ./tmp/0167.png
    ./tmp/0168.png
    ./tmp/0169.png
    ./tmp/0170.png
    ./tmp/0171.png
    ./tmp/0172.png
    ./tmp/0173.png
    ./tmp/0174.png
    ./tmp/0175.png
    ./tmp/0176.png
    ./tmp/0177.png
    ./tmp/0178.png
    ./tmp/0179.png
    ./tmp/0180.png
    ./tmp/0181.png
    ./tmp/0182.png
    ./tmp/0183.png
    ./tmp/0184.png
    ./tmp/0185.png
    ./tmp/0186.png
    ./tmp/0187.png
    ./tmp/0188.png
    ./tmp/0189.png
    ./tmp/0190.png
    ./tmp/0191.png
    ./tmp/0192.png
    ./tmp/0193.png
    ./tmp/0194.png
    ./tmp/0195.png
    ./tmp/0196.png
    ./tmp/0197.png
    ./tmp/0198.png
    ./tmp/0199.png
    ./tmp/0200.png
    ./tmp/0201.png
    ./tmp/0202.png
    ./tmp/0203.png
    ./tmp/0204.png
    ./tmp/0205.png
    ./tmp/0206.png
    ./tmp/0207.png
    ./tmp/0208.png
    ./tmp/0209.png
    ./tmp/0210.png
    ./tmp/0211.png
    ./tmp/0212.png
    ./tmp/0213.png
    ./tmp/0214.png
    ./tmp/0215.png
    ./tmp/0216.png
    ./tmp/0217.png
    ./tmp/0218.png
    ./tmp/0219.png
    ./tmp/0220.png
    ./tmp/0221.png
    ./tmp/0222.png
    ./tmp/0223.png
    ./tmp/0224.png
    ./tmp/0225.png
    ./tmp/0226.png
    ./tmp/0227.png
    ./tmp/0228.png
    ./tmp/0229.png
    ./tmp/0230.png
    ./tmp/0231.png
    ./tmp/0232.png
    ./tmp/0233.png
    ./tmp/0234.png
    ./tmp/0235.png
    ./tmp/0236.png
    ./tmp/0237.png
    ./tmp/0238.png
    ./tmp/0239.png
    ./tmp/0240.png
    ./tmp/0241.png
    ./tmp/0242.png
    ./tmp/0243.png
    ./tmp/0244.png
    ./tmp/0245.png
    ./tmp/0246.png
    ./tmp/0247.png
    ./tmp/0248.png
    ./tmp/0249.png
    ./tmp/0250.png
    ./tmp/0251.png
    ./tmp/0252.png
    ./tmp/0253.png
    ./tmp/0254.png
    ./tmp/0255.png
    ./tmp/0256.png
    ./tmp/0257.png
    ./tmp/0258.png
    ./tmp/0259.png
    ./tmp/0260.png
    ./tmp/0261.png
    ./tmp/0262.png
    ./tmp/0263.png
    ./tmp/0264.png
    ./tmp/0265.png
    ./tmp/0266.png
    ./tmp/0267.png
    ./tmp/0268.png
    ./tmp/0269.png
    ./tmp/0270.png
    ./tmp/0271.png
    ./tmp/0272.png
    ./tmp/0273.png
    ./tmp/0274.png
    ./tmp/0275.png
    ./tmp/0276.png
    ./tmp/0277.png
    ./tmp/0278.png
    ./tmp/0279.png
    ./tmp/0280.png
    ./tmp/0281.png
    ./tmp/0282.png
    ./tmp/0283.png
    ./tmp/0284.png
    ./tmp/0285.png
    ./tmp/0286.png
    ./tmp/0287.png
    ./tmp/0288.png
    ./tmp/0289.png
    ./tmp/0290.png
    ./tmp/0291.png
    ./tmp/0292.png
    ./tmp/0293.png
    ./tmp/0294.png
    ./tmp/0295.png
    ./tmp/0296.png
    ./tmp/0297.png
    ./tmp/0298.png
    ./tmp/0299.png
    ./tmp/0300.png
    ./tmp/0301.png
    ./tmp/0302.png
    ./tmp/0303.png
    ./tmp/0304.png
    ./tmp/0305.png
    ./tmp/0306.png
    ./tmp/0307.png
    ./tmp/0308.png
    ./tmp/0309.png
    ./tmp/0310.png
    ./tmp/0311.png
    ./tmp/0312.png
    ./tmp/0313.png
    ./tmp/0314.png
    ./tmp/0315.png
    ./tmp/0316.png
    ./tmp/0317.png
    ./tmp/0318.png
    ./tmp/0319.png
    ./tmp/0320.png
    ./tmp/0321.png
       `;
    return data.split("\n")[index];
  }

  const frameCount = 321;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#section1>canvas`,
      start: `top top`,
      end: `290% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#section1",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `350% top`,
    // markers: true
  });

  gsap.to("#section1", {
    scrollTrigger: {
      trigger: `#section1`,
      start: `top top`,
      end: `280%`,
      pin: true,
      scroller: `#section1`,
      // markers: true
    },
  });
}

canvas();

// ///////////////////////////////




document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-circle", {
      clipPath: "inset(0% 0 0 0)", 
      scrollTrigger: {
          trigger: "#main",
          start: "top top",
          end: "bottom -200%",
          scrub: true
      }
  });
});




/////////////////////////////////  NAV ////////////////////////////////////////////




function underline() {
  var h1 = document.querySelector(".text");
  var aadiline = document.querySelector(".underline");
  var h12 = document.querySelector(".text2");
  var aadiline2 = document.querySelector(".underline2");
  var h13 = document.querySelector(".text3");
  var aadiline3 = document.querySelector(".underline3");
  var h14 = document.querySelector(".text4");
  var aadiline4 = document.querySelector(".underline4");
  let flag = 0;
  var icon = document.querySelector(".icon");
  var hidden = document.querySelector(".hidden-nav");

 
  h1.addEventListener("mouseenter", function () {
    gsap.to(aadiline, {
      // backgroundColor:"orange",
      height: "0%",
      left: "12%",
    });
  });
  h1.addEventListener("mouseleave", function () {
    gsap.to(aadiline, {
      height: "40%",
    });
  });

  
  h12.addEventListener("mouseenter", function () {
    gsap.to(aadiline2, {
      // backgroundColor:"orange",
      height: "0%",
      left: "28%",
    });
  });
  h12.addEventListener("mouseleave", function () {
    gsap.to(aadiline2, {
      height: "40%",
    });
  });

  
  h13.addEventListener("mouseenter", function () {
      gsap.to(aadiline3, {
        // backgroundColor:"orange",
        height: "0%",
        left: "71.2%",
      });
  });
  h13.addEventListener("mouseleave", function () {
      gsap.to(aadiline3, {
        height: "40%",
      });
  });


    
  h14.addEventListener("mouseenter", function () {
      gsap.to(aadiline4, {
        // backgroundColor:"orange",
        height: "0%",
        left: "85.2%",
      });
  });
  h14.addEventListener("mouseleave", function () {
      gsap.to(aadiline4, {
        height: "40%",
      });
  });


icon.addEventListener("click", function () {
  var tl = gsap.timeline();
  if (flag === 0) {
    flag = 1;
    if (window.innerWidth < 1025) {
      gsap.to(hidden, {
        height: "30vh",
        ease: "expoScale(0.5,7,none)",
        backgoundColor: "#352328",
      });
      document.querySelector(".icon h5").textContent = "CLOSE";
      document.querySelector(".icon h5").style.transition = "all ease 5s";
    } else {
      gsap.to(hidden, {
        height: "100vh",
        ease: "expoScale(0.5,7,none)",
      });
      tl.from(".four-div", {
        opacity: 0,
        y: -300,
        stagger: 0.2,
        duration: 0.8,
      });
      tl.from(
        ".hidden-nav img",
        {
          opacity: 0,
        },
        "anim"
      );
      tl.from(
        ".four-div h1",
        {
          opacity: 0,
          stagger: 0.2,
          y: -50,
        },
        "anim"
      );

      tl.from(
        ".four-div .h4",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          y: -50,
        },
        "anim"
      );
      document.querySelector(".icon h5").textContent = "CLOSE";
    }
  } else {
    flag = 0;
    var tl = gsap.timeline();
    gsap.to(hidden, {
      height: "0vh",
      duration: 1,
      ease: "expoScale(0.5,7,none)",
    });
    document.querySelector(".icon h5").textContent = "MENU";
    document.querySelector(".icon h5").style.transition = "all ease 5s";
  }
});

    
  }
  

//   /////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {


  const section = document.querySelector("#canvas-wraper");
  const canvas = document.querySelector("#draw");
  if (!canvas) {
    console.error("Canvas element not found");
    throw new Error("Canvas element not found");
  }

  const ctx = canvas.getContext("2d");

  // Set the canvas dimensions to match the section dimensions
  function setCanvasSize() {
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;
    ctx.fillStyle = "#352328";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setCanvasSize(); // Initial setting

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 150;

  ctx.globalCompositeOperation = "destination-out";

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if (!isDrawing) return;
    if (typeof e.offsetX === "undefined" || typeof e.offsetY === "undefined") {
      console.error("Event properties offsetX or offsetY are undefined");
      return;
    }
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousedown", (e) => {
    if (typeof e.offsetX === "undefined" || typeof e.offsetY === "undefined") {
      console.error(
        "Event properties offsetX or offsetY are undefined on mousedown"
      );
      return;
    }
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  // Resize the canvas when the window is resized
  window.addEventListener("resize", setCanvasSize);
});

document.addEventListener("DOMContentLoaded", () => {
  var clutter = "";
  document
    .querySelector(".text-div h1")
    .textContent.split("")
    .forEach(function (e) {
      clutter += `<span class="a">${e}</span>`;
    });
  document.querySelector(".text-div h1").innerHTML = clutter;
  var spans = document.querySelectorAll(".text-div h1 ");
  var button = document.querySelectorAll("#section4 button ");

  gsap.from(spans, {
    scrollTrigger: {
      trigger: spans,
      scroller: "#main",
      // markers:true,
      start: "top 96%",
      end: "top 60%",
      scrub: true,
    },
    y: "200",
    duration: 3,
    opacity: 0.4,
    ease: "Expo.Power1",
  });

  gsap.from(button, {
    scrollTrigger: {
      trigger: button,
      scroller: "#main",
      // markers:true,
      start: "top 110%",
      end: "top 95%",
      scrub: true,
    },
    y: "100",
    opacity: 0,
    // duration:1,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //   var tl = gsap.timeline();

  //   gsap.from(".alagse", {
  //     scrollTrigger: {
  //       trigger: ".alagse",
  //       scroller: "#main",
  //     //   markers:true,
  //       scrub: true,
  //       start: "top 155%",
  //     },
  //     width: 0,
  //     height: 0,
  //     // scale:0,
  //     duration: 1,
  //   });

  if (window.innerWidth > 950) {
    gsap.from(".alagse", {
      scrollTrigger: {
        trigger: ".alagse",
        scroller: "#main",
        //   markers:true,
        scrub: true,
        start: "top 155%",
      },
      width: 0,
      height: 0,
      // scale:0,
      duration: 1,
    });
  }

  gsap.to(".alagse-circal img", {
    scrollTrigger: {
      trigger: ".alagse",
      scroller: "#main",
      // markers:true,
      scrub: true,
      start: "top 50%",
    },
    scale: 0.9,
    duration: 1,
  });

  gsap.from(".h1parent #h1first", {
    scrollTrigger: {
      trigger: ".h1parent #h1first",
      scroller: "#main",
      start: "top 130%",
      // end: "top 60%",
      scrub: true,
      // markers:true,
    },
    x: "-17vw",
    y: "-40%",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 0.8,
  });

  gsap.from("#h12", {
    scrollTrigger: {
      trigger: "#h12",
      scroller: "#main",
      start: "top 150%",
      end: "top 40%",
      scrub: true,
      // markers:true,
    },
    x: "25vw",
    opacity: 0,
    y: "20%",
    ease: "Expo.easeInOut",
    duration: 0.8,
  });

  gsap.from(".alagse p", {
    scrollTrigger: {
      trigger: "#h12",
      scroller: "#main",
      start: "top 100%",
      scrub: true,
      // markers:true,
    },
    y: "15vw",
    opacity: 0,
    duration: 0.7,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  var videocenter = document.querySelector(" .video-center");

  var tl = gsap.timeline();

  if (window.innerWidth > 1025) {
    // tl.from(videocenter, {
    //   scrollTrigger: {
    //     scroller: "#main",
    //     trigger: videocenter,
    //     start: "top 90%",
    //     markers:true
    //   },
    //   y: "100%",
    //   scale: 0.8,
    //   duration: 2,
    //   // ease:"Expo.easeInOut"
    // });

    gsap.to(videocenter, {
      scrollTrigger: {
        scroller: "#main",
        trigger: videocenter,
        start: "top 25%",
        // scrub:true,
        // markers:true
      },
      scale: 6,
      duration:.8,
      opacity: 0,
      display: "none",
      ease: "Expo.easeInOut",
    });
  }

  gsap.from(".hero-copy h1,h4", {
    scrollTrigger: {
      scroller: "#main",
      trigger: ".hero-copy h1,h4",
      start: "top 70%",
      // scrub:true,
      // markers:true
    },
    duration: 1.5,
    x: "120%",
    opacity: 0,
    // ease:"Power1.easeInOut"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from("#section7 h1", {
    scrollTrigger: {
      trigger: "#section7 h1",
      scroller: "#main",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.to(".img-cont img", {
    scrollTrigger: {
      trigger: ".img-cont img",
      scroller: "#main",
      start: "top 90%",
      scrub: 1,
    },
    scale: 0.5,
    duration: 0.5,
  });
  gsap.to("#section8 h1", {
    scrollTrigger: {
      trigger: "#section8 h1",
      scroller: "#main",
      start: "top 20%",
      // markers:true,
      scrub: 1,
    },
    opacity: 0,
  });
  gsap.to("#section8 .left-sec8", {
    scrollTrigger: {
      trigger: "#section8 .left-sec8",
      scroller: "#main",
      start: "top 10%",
      // markers:true,
      scrub: 1,
    },
    opacity: 0,
  });

  gsap.to("#section9 img", {
    scrollTrigger: {
      trigger: "#section9 img",
      scroller: "#main",
      start: "top 90%",
      scrub: 1,
    },
    scale: 0.7,
    duration: 0.5,
  });

  gsap.to("#section10 img", {
    scrollTrigger: {
      trigger: "#section10 img",
      scroller: "#main",
      start: "top 90%",
      scrub: 1,
    },
    scale: 0.8,
    duration: 0.5,
  });

  gsap.from("#section10 .text-contleft", {
    scrollTrigger: {
      trigger: "#section10 .text-contleft",
      scroller: "#main",
      start: "top 30%",
      end: "15%",
      // markers:true,
      scrub: true,
    },
    opacity: 0,
    y: "5%",
  });

  gsap.from("#section11 h1 ", {
    scrollTrigger: {
      trigger: "#section11 h1 ",
      scroller: "#main",
      start: "top 90%",
      end: "top 40%",
      // markers:true,
      scrub: true,
    },
    opacity: 0,
    duration: 1,
    // y:"5%"
  });

  gsap.from("#section11 .h6 ", {
    scrollTrigger: {
      trigger: "#section11 .h6 ",
      scroller: "#main",
      start: "top 90%",
      end: "top 50%",
      // markers:true,
      scrub: true,
    },
    opacity: 0,
    // duration:1
    // y:"5%"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function wheelAnimation() {
    window.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
        gsap.to(".automatic", {
          transform: "translateX(-100%)",
          duration: 200,
          repeat: -1,
          ease: "none",
        });
      } else {
        gsap.to(".automatic", {
          transform: "translateX(90%)",
          duration: 200,
          repeat: -1,
          ease: "none",
        });
      }
    });
  }

  wheelAnimation();

  gsap.from("#section12 .page", {
    scrollTrigger: {
      trigger: "#section12 .page",
      scroller: "#main",
      start: "top 60%",
      end: "top 30%",
      // markers:true,
      scrub: true,
    },
    y: "30%",
    opacity: 0,
    duration: 1.5,
    ease: "Expo.Power1",
  });

  var cont = document.querySelector(".round-container");
  var cont1 = document.querySelector(".round-container .one");
  var cont2 = document.querySelector(".round-container .two");
  var cont3 = document.querySelector(".round-container .three");
  var cont4 = document.querySelector(".round-container .four");
  var cont5 = document.querySelector(".round-container .five");
  var cont6 = document.querySelector(".round-container .six");

  cont5.addEventListener("click", function () {
    gsap.to(cont, {
      rotate: "-35deg",
    });
    gsap.to(cont1, {
      rotate: "30deg",
    });
    gsap.to(cont5, {
      rotate: "35deg",
    });
    gsap.to(cont2, {
      rotate: "38deg",
    });
  });
  cont1.addEventListener("click", function () {
    gsap.to(cont, {
      rotate: "0deg",
    });
    gsap.to(cont1, {
      rotate: "0deg",
    });
    gsap.to(cont5, {
      rotate: "5deg",
    });
    gsap.to(cont6, {
      rotate: "-5deg",
    });
  });
  cont6.addEventListener("click", function () {
    gsap.to(cont, {
      rotate: "35deg",
    });
    gsap.to(cont1, {
      rotate: "-30deg",
    });
    gsap.to(cont6, {
      rotate: "-35deg",
    });
    gsap.to(cont4, {
      rotate: "-40deg",
    });
  });
});






underline();
circal()
// Parallax Code
