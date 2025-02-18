document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        delay: 200,
        duration: 1200,
        once: false,
    });

    // Navbar Toggle (Eğer burada hata alıyorsan, ID'yi kontrol et)
    function toggleNavbar(collapseID) {
        let navbar = document.getElementById(collapseID);
        if (navbar) {
            navbar.classList.toggle("hidden");
            navbar.classList.toggle("block");
        } else {
            console.error("HATA: " + collapseID + " ID'li element bulunamadı!");
        }
    }
});
