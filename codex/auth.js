(() => {
  const SESSION_KEY = "aoun_current_user";

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch {
      return null;
    }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.reload();
  }

  function closeAllMenus() {
    document.querySelectorAll("[data-user-menu]").forEach((menu) => {
      if (menu instanceof HTMLElement) menu.hidden = true;
    });
  }

  function buildUserMenu(trigger) {
    if (!(trigger instanceof HTMLElement)) return;
    const wrapper = trigger.parentElement;
    if (!wrapper) return;

    let menu = wrapper.querySelector("[data-user-menu]");
    if (!menu) {
      menu = document.createElement("div");
      menu.setAttribute("data-user-menu", "true");
      menu.hidden = true;
      menu.style.position = "absolute";
      menu.style.top = "calc(100% + 8px)";
      menu.style.insetInlineStart = "0";
      menu.style.minWidth = "180px";
      menu.style.background = "#fff";
      menu.style.border = "1px solid #e4e7ee";
      menu.style.borderRadius = "14px";
      menu.style.boxShadow = "0 14px 30px rgba(25,49,88,0.12)";
      menu.style.padding = "8px";
      menu.style.zIndex = "999";

      const logoutItem = document.createElement("a");
      logoutItem.href = "#";
      logoutItem.textContent = "تسجيل الخروج";
      logoutItem.style.display = "block";
      logoutItem.style.padding = "10px 12px";
      logoutItem.style.borderRadius = "10px";
      logoutItem.style.color = "#193158";
      logoutItem.style.textDecoration = "none";
      logoutItem.style.fontWeight = "700";

      logoutItem.addEventListener("mouseenter", () => {
        logoutItem.style.background = "#f4f6fa";
      });

      logoutItem.addEventListener("mouseleave", () => {
        logoutItem.style.background = "transparent";
      });

      logoutItem.addEventListener("click", (event) => {
        event.preventDefault();
        logout();
      });

      menu.appendChild(logoutItem);
      wrapper.style.position = "relative";
      wrapper.appendChild(menu);
    }
  }

  function updateAuthUI() {
    const user = getCurrentUser();
    const loginLinks = document.querySelectorAll("[data-login-link]");
    const logoutLinks = document.querySelectorAll("[data-logout-link]");

    logoutLinks.forEach((link) => {
      if (link instanceof HTMLElement) {
        link.remove();
      }
    });

    loginLinks.forEach((link) => {
      if (!(link instanceof HTMLAnchorElement)) return;

      if (user) {
        const displayName = user.name || user.email || "الحساب";
        link.textContent = `مرحبًا ${displayName}`;
        link.setAttribute("href", "#");
        link.removeAttribute("aria-disabled");
        link.style.pointerEvents = "";
        link.style.opacity = "";
        buildUserMenu(link);

        if (!link.dataset.menuBound) {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            const menu = link.parentElement?.querySelector("[data-user-menu]");
            if (!(menu instanceof HTMLElement)) return;
            const isHidden = menu.hidden;
            closeAllMenus();
            menu.hidden = !isHidden;
          });
          link.dataset.menuBound = "true";
        }
      } else {
        const originalHref = link.dataset.loginHref || "./login/index.html";
        link.textContent = "تسجيل الدخول";
        link.setAttribute("href", originalHref);
        link.removeAttribute("aria-disabled");
        link.style.pointerEvents = "";
        link.style.opacity = "";
        const menu = link.parentElement?.querySelector("[data-user-menu]");
        if (menu instanceof HTMLElement) menu.remove();
      }
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest("[data-login-link]") && !target.closest("[data-user-menu]")) {
      closeAllMenus();
    }
  });

  document.addEventListener("DOMContentLoaded", updateAuthUI);
})();
