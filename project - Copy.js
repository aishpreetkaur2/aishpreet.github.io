document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggleMenu");
    const menu = document.querySelector(".menu");

    toggleMenuButton.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

    const categories = document.querySelectorAll(".categories button");
    const skills = document.querySelectorAll(".skill");

    categories.forEach(function (category) {
        category.addEventListener("click", function () {
            const filter = category.getAttribute("data-filter");

            skills.forEach(function (skill) {
                const skillCategory = skill.getAttribute("data-category");

                if (filter === "all" || skillCategory === filter) {
                    skill.style.display = "inline-block";
                } else {
                    skill.style.display = "none";
                }
            });
        });
    });
});