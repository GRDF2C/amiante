
const formUrl = "https://prev2s.grdf.fr/form/choice";

const interv1Url  = "";
const interv2Url  = "";
const interv2_1Url = "";
const interv2_2Url = "";
const interv3Url  = "";
const interv3_1Url = "";
const interv3_2Url = "";
const interv3_3Url = "";
const interv3_4Url = "";
const interv4Url  = "";
const interv5Url  = "";
const interv6Url  = "";
const interv7Url  = "";
const interv8Url  = "";
const interv9Url  = "";
const interv10Url = "";



const btnForm = document.getElementById("btnForm");
const btnToggleMenu = document.getElementById("btnToggleMenu");
const menu = document.getElementById("menuFiches");
const list = document.getElementById("interventionList");


btnForm.addEventListener("click", () => {
  if (formUrl) window.open(formUrl, "_blank");
});


let isOpen = false;

function openMenu() {
  menu.hidden = false;
  menu.setAttribute("aria-hidden", "false");
  btnToggleMenu.setAttribute("aria-expanded", "true");

  menu.style.height = "0px";
  menu.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    menu.style.height = menu.scrollHeight + "px";
  });

  menu.addEventListener("transitionend", function onEnd() {
    menu.style.height = "auto";
    menu.removeEventListener("transitionend", onEnd);
  });

  isOpen = true;
}

function closeMenu() {
  const full = menu.scrollHeight;
  menu.style.height = full + "px";
  menu.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    menu.style.height = "0px";
  });

  menu.addEventListener("transitionend", function onEnd() {
    menu.hidden = true;
    menu.setAttribute("aria-hidden", "true");
    btnToggleMenu.setAttribute("aria-expanded", "false");
    menu.removeEventListener("transitionend", onEnd);
  });

  isOpen = false;
}

btnToggleMenu.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});


const urlById = {
  interv1:  interv1Url,
  interv2:  interv2Url,  interv2_1:  interv2_1Url,  interv2_2:  interv2_2Url,
  interv3:  interv3Url,  interv3_1:  interv2_1Url,  interv3_2:  interv2_2Url,  interv3_3:  interv3_4Url,
  interv4:  interv4Url,
  interv5:  interv5Url,
  interv6:  interv6Url,
  interv7:  interv7Url,
  interv8:  interv8Url,
  interv9:  interv9Url,
  interv10: interv10Url,
};

list.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-item");
  if (!btn) return;
  const id = btn.id;
  const url = urlById[id];
  if (url) window.open(url, "_blank");
});

// Gestion des sous-menus
function toggleSubmenu(btnId, submenuId) {
  const btn = document.getElementById(btnId);
  const submenu = document.getElementById(submenuId);

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // évite d’ouvrir un lien direct
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // Fermer si déjà ouvert
    if (expanded) {
      btn.setAttribute("aria-expanded", "false");
      submenu.hidden = true;
    } else {
      // Ferme les autres sous-menus ouverts
      document.querySelectorAll(".submenu").forEach(s => s.hidden = true);
      document.querySelectorAll(".menu-item.has-arrow").forEach(b => b.setAttribute("aria-expanded", "false"));

      btn.setAttribute("aria-expanded", "true");
      submenu.hidden = false;
    }
  });
}

toggleSubmenu("interv2", "submenu-interv2");
toggleSubmenu("interv3", "submenu-interv3");
