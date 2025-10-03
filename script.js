
const formUrl = "https://prev2s.grdf.fr/form/choice";

const interv0Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=71";
const interv1Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=48";

const interv2Url = "https://grdf2c.github.io/amiante/index2.html"

const interv2_1Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=40";
const interv2_2Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=44";

const interv3Url = "https://grdf2c.github.io/amiante/index3.html"
  
const interv3_1Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=3";
const interv3_2Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=8";
const interv3_3Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=15";
const interv3_4Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=19";
  
const interv4Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=25";
const interv5Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=30";
const interv6Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=34";
const interv7Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=53";
const interv8Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=57";
const interv9Url  = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=61";
const interv10Url = "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://grdf2c.github.io/amiante/Docs/mo-amiante.pdf#page=66";

const retourUrl = "https://grdf2c.github.io/amiante/"

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
  interv0:  interv0Url,
  interv1:  interv1Url,
  interv2:  interv2Url,
  interv2_1:  interv2_1Url,  interv2_2:  interv2_2Url,
  interv3:  interv3Url,
  interv3_1:  interv2_1Url,  interv3_2:  interv2_2Url,  interv3_3:  interv3_4Url,
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
