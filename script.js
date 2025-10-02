
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
const menuBody = menu.querySelector('.menu-body'); // wrapper animé (doit exister dans le HTML ci-dessus)


btnForm.addEventListener("click", () => {
  if (formUrl) window.open(formUrl, "_blank");
});


let isOpen = false;

function openMenu() {
  menu.hidden = false;
  menu.setAttribute("aria-hidden", "false");
  btnToggleMenu.setAttribute("aria-expanded", "true");

  // anime la hauteur de menuBody
  menuBody.style.height = "0px";
  menuBody.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    menuBody.style.height = menuBody.scrollHeight + "px";
  });

  menuBody.addEventListener("transitionend", function onEnd() {
    menuBody.style.height = "auto";
    menuBody.style.transition = "";
    menuBody.removeEventListener("transitionend", onEnd);
  });

  isOpen = true;
}

function closeMenu() {
  // ferme tout d'abord les sous-menus ouverts
  document.querySelectorAll('.submenu').forEach(s => s.hidden = true);
  document.querySelectorAll('.menu-item.has-arrow').forEach(b => b.setAttribute('aria-expanded','false'));

  // anime la réduction de menuBody puis cache le wrapper
  menuBody.style.height = menuBody.scrollHeight + "px";
  menuBody.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    menuBody.style.height = "0px";
  });

  menuBody.addEventListener("transitionend", function onEnd() {
    menu.hidden = true;
    menu.setAttribute("aria-hidden", "true");
    btnToggleMenu.setAttribute("aria-expanded", "false");
    menuBody.style.transition = "";
    menuBody.removeEventListener("transitionend", onEnd);
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

// basique : ouvre/ferme un sous-menu, ferme les autres
function toggleSubmenu(btnId, submenuId) {
  const btn = document.getElementById(btnId);
  const submenu = document.getElementById(submenuId);
  if (!btn || !submenu) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // empêche le handler du parent d'ouvrir une url
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // fermer autres sous-menus
    document.querySelectorAll('.submenu').forEach(s => { if (s !== submenu) s.hidden = true; });
    document.querySelectorAll('.menu-item.has-arrow').forEach(b => { if (b !== btn) b.setAttribute('aria-expanded','false'); });

    if (expanded) {
      btn.setAttribute("aria-expanded","false");
      submenu.hidden = true;
    } else {
      btn.setAttribute("aria-expanded","true");
      submenu.hidden = false;

      // si le sous-menu dépasse la fenêtre à droite, on le positionne à gauche
      const rect = submenu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        submenu.style.left = 'auto';
        submenu.style.right = '100%';
        submenu.style.marginLeft = '0';
        submenu.style.marginRight = '8px';
      } else {
        submenu.style.left = '';
        submenu.style.right = '';
        submenu.style.marginRight = '';
      }
    }
  });
}

toggleSubmenu("interv2", "submenu-interv2");
toggleSubmenu("interv3", "submenu-interv3");

// fermer sous-menus au clic à l'extérieur
document.addEventListener("click", () => {
  document.querySelectorAll('.submenu').forEach(s => s.hidden = true);
  document.querySelectorAll('.menu-item.has-arrow').forEach(b => b.setAttribute('aria-expanded','false'));
});

