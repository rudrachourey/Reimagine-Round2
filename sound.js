

function soundSytem() {
    // Create the canvas element
    const c = document.createElement('canvas');
    const audio = document.querySelector("#audio");
    
    // Append the canvas to the container
    document.querySelector(".container-sound").appendChild(c);
    



    // Set up canvas dimensions and styles
    const opt = {
        width: c.offsetWidth, // Example width
        height: c.offsetHeight, // Example height
        midY: c.offsetHeight / 2, // Center Y position
        points: 80,
        stretch: 10,
        sinHeight: 0,
        speed: -0.1,
        strokeColor: "white",
        strokeWidth: 1.6,
        power: false,
    };
    
    c.width = opt.width * 2;
    c.height = opt.height * 2;
    c.style.width = opt.width + 'px';
    c.style.height = opt.height + 'px';
    
    const ctx = c.getContext("2d");
    ctx.scale(2, 2);
    
    ctx.strokeStyle = opt.strokeColor;
    ctx.lineWidth = opt.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    let time = 0;
    
    const render = () => {
        window.requestAnimationFrame(render);
        ctx.clearRect(0, 0, opt.width * 2, opt.height * 2); // Clear the canvas
        time += 1;
        ctx.beginPath();
        let increment = 0;
        
        for (let i = 0; i <= opt.points; i++) {
            increment = i < opt.points / 2 ? increment + 0.1 : increment - 0.1;
            const x = (opt.width / opt.points) * i;
            const y = opt.midY + Math.sin(time * opt.speed + i / opt.stretch) * opt.sinHeight * increment;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    };
    
    render();
    
    c.addEventListener("click", () => {
        // console.log("first sound")
        opt.power = !opt.power;
        // console.log("sound");
        if (opt.power) {
            audio.play();
            gsap.to(opt, {
                duration: 1,
                sinHeight: 2.5,
                stretch: 5,
                ease: "power2.inOut",
            });
        } else {
            audio.pause();
            gsap.to(opt, {
                duration: 1,
                sinHeight: 0,
                stretch: 10,
                ease: "power2.inOut",
            });
        }
    });
}

soundSytem();
