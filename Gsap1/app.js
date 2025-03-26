
const textContent = document.querySelector(".text-content");
        const lines = document.querySelectorAll(".text-content h3");
        const lineHeight = lines[0].offsetHeight; // Get height of one line
        const graybg = document.querySelector(".blur-screen")
        const loadingScreen = document.querySelector(".loading-screen");
        const loadingContent = document.querySelector(".loading-content");
        function moveUp() {
            gsap.to(textContent , {
                y: `-=${lineHeight}`,
                duration: 1,
                ease: "power2.inOut",

            });
        }
     // Move up every 2 seconds
  

        function expand(){
            gsap.to(graybg, {
                height: `+=13.6%`,
                duration: 1,
                ease: "power2.inOut",
            })
        }

        const grayBGInterval = setInterval(expand, 1000);
        const TextDivInterval = setInterval(moveUp, 1000); 
        setInterval(() => {
            clearInterval(TextDivInterval)
            clearInterval(grayBGInterval)

            gsap.to(loadingContent, {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    // Step 2: Collapse blur-screen upwards
                    gsap.to(graybg, {
                        y: "0%",
                        duration: 1,
                        ease: "power2.inOut",
                    });
        
                    // Step 3: Collapse and remove loading screen
                    gsap.to(loadingScreen, {
                        y: "-100%",
                        duration: 1.2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            loadingScreen.remove(); // Remove from DOM
                        }
                    });
                }
            });
        }, 8000);