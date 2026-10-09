// =====================================================
// 1. SMOOTH SCROLL
// =====================================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetID = this.getAttribute("href");

        // ถ้าเป็นลิงก์ไปหน้าอื่น
        // เช่น MyProject/Project.html
        // ให้ทำงานตามปกติ
        if (!targetID.startsWith("#")) {
            return;
        }

        event.preventDefault();

        const targetSection = document.querySelector(targetID);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =====================================================
// 2. SECTION FADE IN
// =====================================================

const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    sectionObserver.observe(section);

});


// =====================================================
// 3. PROJECT HOVER
// =====================================================

const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {

    project.addEventListener("mouseenter", function() {

        this.classList.add("project-hover");

    });


    project.addEventListener("mouseleave", function() {

        this.classList.remove("project-hover");

    });

});


// =====================================================
// 4. BACK TO TOP
// =====================================================

const backToTop = document.getElementById("backToTop");


// เช็กว่ามีปุ่ม Back To Top หรือไม่
if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =====================================================
// 5. PAGE LOAD
// =====================================================

window.addEventListener("load", function() {

    document.body.classList.add("loaded");

});