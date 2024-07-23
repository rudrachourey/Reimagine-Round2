function loader(){


    const box = document.querySelector('.preloader');  
    document.querySelector(".enter").addEventListener("click",()=>{
      gsap.to(".question-div .one",{
        y:100,
        x:-100,
        duration:1.4,
        opacity:0,
        // ease:"Expo.easeInOut"
      })
  
      gsap.to(".question-div .two",{
        y:-100,
        x:100,
        duration:1.4,
        opacity:0,
        // ease:"Expo.easeInOut"
      })
  
      gsap.to(".question-div .two",{
        y:-100,
        x:100,
        duration:1.4,
        opacity:0,
        // ease:"Expo.easeInOut"
      })
  
      gsap.to(".question-div .content, .que-btn, p",{
        opacity:0,
      })

      gsap.to(".question-div .contents",{
        y:-150,
        duration:1.5
      })
      gsap.to(".contents h2:nth-child(1)", {
        duration: 1,
        color: "#352328",
        onUpdate: function() {
            document.querySelector(".contents h2:nth-child(1)").style.webkitTextStroke = "1px #ffe9cb";
      }
    })
    gsap.to(".contents h2:nth-child(2)", {
        color: "#ffe9cb", // Change to the desired color
        // animation: "none", // Remove animation
        duration: 1 // Animation duration
    });
      gsap.to(".question-div",{
        backgroundColor: "#352328"
      })
      gsap.to(".preloader", {
        duration: 1,
        opacity: 1,
        onStart: () => {
            // Set display to initial at the start of the animation
            box.style.display = 'flex';
            bounce()
        }
    });
    })
  



function bounce(){

// Create a GSAP timeline
const tl = gsap.timeline();

// Define random image URL
const random1 = getRandomNumber();
const imgUrl1 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg?' + random1;
const image1 = new Image();

function loaderOut() {
    // console.log('Image is done loading.');
}

// Define helper function for random number
function getRandomNumber() {
    return Math.floor(Math.random() * 10000);
}

// Set up event listener for image load
image1.addEventListener('load', loaderOut);
image1.src = imgUrl1;

// Set initial properties using GSAP
gsap.set('.circlesq', { scale: 0, opacity: 0 });

// Use GSAP to animate elements with smooth transitions
tl.to('.circlesq', { 
    duration: 1.2,  // Extended duration for smoother transition
    opacity: 1, 
    scale: 1, 
    ease: 'Expo.InOut',  // Softer ease function for smoother start
    stagger: {
        amount: 0.5,  // Total duration of staggering
        from: "start",  // Start staggering from the beginning
        ease: "Expo.InOut"  // Easing for each staggered element
    }
})
.to('.circlesq', { 
    duration: 1,  // Adjusted duration
    scale: 1.2, 
    boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)', 
    repeat: -1, 
    yoyo: true, 
    ease: 'Expo.InOut',  // Smooth easing function for repeat animation
    stagger: {
        amount: 0.5,  // Stagger amount for this step
        from: "start",  // Stagger from the start
        ease: "Expo.InOut"  // Easing for each staggered element
    }
}, '-=.9');  // Overlap animations slightly for smoother transitions

}



}



document.querySelector(".enter").addEventListener("click",()=>{
    setTimeout(() => {
        document.querySelector(".question-div").style.display = "none" 
        document.querySelector(".question-div").style.zIndex = 0 
        document.querySelector("nav").style.opacity = 1 
        document.querySelector(".scroll-indicator").style.display = "initial" 
    },10000);
})












  loader()

