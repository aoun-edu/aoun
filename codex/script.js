const body = document.body;
const mobileDrawer = document.getElementById("mobileDrawer");
const searchModal = document.getElementById("searchModal");
const accordionToggle = document.getElementById("accordionToggle");
const accordionContent = document.getElementById("accordionContent");

function toggleLayer(element, open) {
  if (!element) return;
  element.classList.toggle("open", open);
  element.setAttribute("aria-hidden", String(!open));
  body.style.overflow = open ? "hidden" : "";
}

document.getElementById("openMenu")?.addEventListener("click", () => {
  toggleLayer(mobileDrawer, true);
});

document.getElementById("closeMenu")?.addEventListener("click", () => {
  toggleLayer(mobileDrawer, false);
});

document.getElementById("openSearch")?.addEventListener("click", () => {
  toggleLayer(searchModal, true);
});

document.getElementById("closeSearch")?.addEventListener("click", () => {
  toggleLayer(searchModal, false);
});

mobileDrawer?.addEventListener("click", (event) => {
  if (event.target === mobileDrawer) {
    toggleLayer(mobileDrawer, false);
  }
});

searchModal?.addEventListener("click", (event) => {
  if (event.target === searchModal) {
    toggleLayer(searchModal, false);
  }
});

accordionToggle?.addEventListener("click", () => {
  const expanded = accordionToggle.getAttribute("aria-expanded") === "true";
  accordionToggle.setAttribute("aria-expanded", String(!expanded));
  accordionContent?.classList.toggle("open", !expanded);
  const icon = accordionToggle.querySelector(".accordion-icon");
  if (icon) icon.textContent = expanded ? "+" : "−";
});
