const cards = document.querySelectorAll(".card");

// entries -> are everything that is intersecting & non-intersecting    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            //observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove("show");
        }
    })
}, {
    rootMargin: '-50% 0px 0px 0px',
});

cards.forEach((card) => {
    observer.observe(card);
});