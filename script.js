
// CONTACT FORM
document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Email tujuan
    const tujuan = "emailkamu@gmail.com";

    const subject = encodeURIComponent("Pesan dari " + nama);

    const body = encodeURIComponent(
        "Nama: " + nama +
        "\nEmail: " + email +
        "\nPesan: " + pesan
    );

    // Membuka aplikasi email
    window.location.href =
        "mailto:" + tujuan +
        "?subject=" + subject +
        "&body=" + body;
});


// NAVBAR ACTIVE LINK
const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ANIMASI SCROLL
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// TAHUN FOOTER OTOMATIS
document.querySelector("footer p").innerHTML =
    "© " + new Date().getFullYear() + " My Personal Portfolio ♡";
