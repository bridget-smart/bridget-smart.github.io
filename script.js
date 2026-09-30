// Shrink the header once the page has scrolled.
// Two thresholds stop it flickering, since shrinking the header changes the page height.
const header = document.getElementById("site-header");

function updateHeader() {
    const y = window.scrollY;
    if (y > 80) {
        header.classList.add("shrunk");
    } else if (y < 10) {
        header.classList.remove("shrunk");
    }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
