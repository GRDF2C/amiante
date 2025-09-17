
const formUrl = "https://prev2s.grdf.fr/form/choice";

const interv1Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2001%2C%20Per%C3%A7age%20de%20parois%20%C3%A0%20vitesse%20la%20%2B%20r%C3%A9duite%20possible%20avec%20humidification%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv2Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2001bis%2C%20Per%C3%A7age%20traversant%20de%20parois%20%C3%A0%20vitesse%20la%20plus%20r%C3%A9duite%20possible%20%C3%A0%20travers%20un%20SAS%20de%20gel%20hydrique%20%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
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
