import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
class AnimateOnScroll {
    constructor() {
        this.sections = document.querySelectorAll("section");
        this.windowHeight = window.innerHeight;
        this.animateElements();
        this.scrollEvent();
    }

    animateElements() {
        this.sections.forEach(section => {
            let h5 = section.querySelector("h5");
            h5.style.opacity = 0;
            h5.style.transform = "translateX(-100%)";
        });
    }

    scrollEvent() {
        window.addEventListener("scroll", () => {
            this.sections.forEach(section => {
                let h5 = section.querySelector("h5");
                let sectionTop = section.getBoundingClientRect().top;
                if (sectionTop - this.windowHeight <= 0) {
                    h5.style.opacity = 1;
                    h5.style.transform = "translateX(0)";
                }
            });
        });
    }
}

// Initialize the class
let animateOnScroll = new AnimateOnScroll();
