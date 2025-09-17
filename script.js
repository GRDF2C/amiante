
const formUrl = "https://prev2s.grdf.fr/form/choice";

const interv1Url  = "https://grdf2c.github.io/ville-grdf/";
const interv2Url  = "https://google.com";
const interv3Url  = "";
const interv4Url  = "";
const interv5Url  = "";
const interv6Url  = "";
const interv7Url  = "";
const interv8Url  = "";
const interv9Url  = "";
const interv10Url = "";
const interv11Url = "";
const interv12Url = "";
const interv13Url = "";
const interv14Url = "";
const interv15Url = "";


const btnForm = document.getElementById("btnForm");
const btnToggleMenu = document.getElementById("btnToggleMenu");
const menu = document.getElementById("menuFiches");
const list = document.getElementById("interventionList");


btnForm.addEventListener("click", () => {
  if (formUrl) window.location.assign(formUrl);
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
  interv1:  interv1Url,  interv2:  interv2Url,  interv3:  interv3Url,
  interv4:  interv4Url,  interv5:  interv5Url,  interv6:  interv6Url,
  interv7:  interv7Url,  interv8:  interv8Url,  interv9:  interv9Url,
  interv10: interv10Url, interv11: interv11Url, interv12: interv12Url,
  interv13: interv13Url, interv14: interv14Url, interv15: interv15Url,
};

list.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-item");
  if (!btn) return;
  const id = btn.id;
  const url = urlById[id];
  if (url) window.location.assign(url);
});
