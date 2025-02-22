// alert('hello');
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");

    burger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        burger.classList.toggle("active");
    });
});
