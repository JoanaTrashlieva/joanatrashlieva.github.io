/*
Portfolio JavaScript
*/

// =========================================
// Mobile navigation
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navbar nav");

if (menuToggle && navigation) {

```
menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});


// Close mobile menu when a link is clicked

navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

});
```

}

// =========================================
// Automatically update footer year
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// =========================================
// Subtle reveal animation
// =========================================

const revealElements = document.querySelectorAll(
".project-card, .skill-category, .about-grid"
);

const observer = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.1
}
```

);

revealElements.forEach((element) => {

```
element.classList.add("reveal");

observer.observe(element);
```

});
