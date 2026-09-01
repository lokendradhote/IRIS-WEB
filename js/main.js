/* =========================================================
   IRIS WEBSITE JAVASCRIPT
   Currently responsible for:
   1. Mobile navigation toggle
   2. Closing mobile navigation after a link is clicked
   3. Updating the aria-expanded accessibility state

   Keep this file separate so future interactive features
   can be added without mixing JavaScript into HTML.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  // Stop silently if a page does not contain the navigation.
  if (!navToggle || !siteNav) return;

  // Toggle the mobile navigation menu.
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after selecting a page.
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
