/* -----------------------------------------------------------
   Configuration à compléter par VOUS :
   - Renseignez l'URL du formulaire (formUrl)
   - Renseignez les URLs des 15 interventions (interventionLinks)
------------------------------------------------------------ */

const formUrl = ""; // ex: "https://votre-domaine/formulaire-amiante"

const interventionLinks = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  // Exemple :
  // "https://votre-domaine/fiches/intervention-1",
  // "https://votre-domaine/fiches/intervention-2",
  // ...
];

/* -----------------------------------------------------------
   Sélection des éléments
------------------------------------------------------------ */
const btnForm = document.getElementById("btnForm");
const btnToggleMenu = document.getElementById("btnToggleMenu");
const menu = document.getElementById("menuFiches");
const list = document.getElementById("interventionList");

/* -----------------------------------------------------------
   Construction du menu (Intervention 1 → 15)
------------------------------------------------------------ */
function buildMenu() {
  list.innerHTML = ""; // reset
  for (let i = 1; i <= 15; i++) {
    const url = interventionLinks[i - 1] || "";

    const li = document.createElement("li");

    const item = document.createElement("button");
    item.type = "button";
    item.className = "menu-item" + (url ? "" : " pending");
    item.textContent = `Intervention ${i}`;
    item.setAttribute("data-url", url);
    item.setAttribute("aria-label", `Ouvrir la fiche Intervention ${i}`);

    item.addEventListener("click", () => {
      const target = item.getAttribute("data-url");
      if (target && target.trim().length > 0) {
        window.location.assign(target);
      } else {
        alert(
          "Lien non défini pour cette intervention.\n" +
          "Ouvrez script.js et renseignez l’URL correspondante dans 'interventionLinks'."
        );
      }
    });

    li.appendChild(item);
    list.appendChild(li);
  }
}
buildMenu();

/* -----------------------------------------------------------
   Bouton Formulaire : redirection
------------------------------------------------------------ */
btnForm.addEventListener("click", () => {
  if (formUrl && formUrl.trim().length > 0) {
    window.location.assign(formUrl);
  } else {
    alert(
      "Lien du formulaire non défini.\n" +
      "Ouvrez script.js et complétez la constante 'formUrl'."
    );
  }
});

/* -----------------------------------------------------------
   Accordéon : ouverture/fermeture du menu avec animation
   (on anime la hauteur pour un rendu smooth)
------------------------------------------------------------ */
let isOpen = false;

function openMenu() {
  menu.hidden = false;
  menu.setAttribute("aria-hidden", "false");
  btnToggleMenu.setAttribute("aria-expanded", "true");

  // Animation height: 0 -> scrollHeight
  menu.style.height = "0px";
  menu.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    const full = menu.scrollHeight;
    menu.style.height = full + "px";
  });

  // Après la transition, on remet height:auto
  menu.addEventListener(
    "transitionend",
    function onEnd() {
      menu.style.height = "auto";
      menu.removeEventListener("transitionend", onEnd);
    }
  );
  isOpen = true;
}

function closeMenu() {
  // Fixer la hauteur actuelle avant de l'animer vers 0
  const full = menu.scrollHeight;
  menu.style.height = full + "px";
  menu.style.transition = "height .25s ease";
  requestAnimationFrame(() => {
    menu.style.height = "0px";
  });

  menu.addEventListener(
    "transitionend",
    function onEnd() {
      menu.hidden = true;
      menu.setAttribute("aria-hidden", "true");
      btnToggleMenu.setAttribute("aria-expanded", "false");
      menu.removeEventListener("transitionend", onEnd);
    }
  );
  isOpen = false;
}

btnToggleMenu.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

/* Clavier : Echappe pour fermer le menu, Enter/Space déjà gérés par le bouton */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen) {
    closeMenu();
    btnToggleMenu.focus();
  }
});

/* -----------------------------------------------------------
   Astuce : si vous mettez le script dans <head>, entourez
   le code ci-dessus par:
   document.addEventListener('DOMContentLoaded', () => { ... });
------------------------------------------------------------ */
