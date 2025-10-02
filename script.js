
const formUrl = "https://prev2s.grdf.fr/form/choice";

const interv0Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Chimique%20(amiante,%20CO,...)/Amiante/Modes%20Op%C3%A9ratoires%20-%20Vidéos/Amiante,%20Mode%20Op%C3%A9ratoire%20-%20La%20totalité%20v05062021.pdf#page=71";
const interv1Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2011%2C%20Percement%20d%27enrob%C3%A9%20amiante%20pour%20localisation%20de%20fuites%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";

const interv2_1Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2009%2C%20D%C3%A9pose%20de%20compteur%2C%20r%C3%A9gulateur%2C%20robinet%20BP%20ou%20autres%20accessoires%20de%20tuyauterie%20gaz%20avec%20joint%20amiante%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv2_2Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2010%2C%20D%C3%A9pose%20de%20joint%20plat%20gaz%20de%20brides%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";

const interv3_1Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2001%2C%20Per%C3%A7age%20de%20parois%20%C3%A0%20vitesse%20la%20%2B%20r%C3%A9duite%20possible%20avec%20humidification%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv3_2Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2001bis%2C%20Per%C3%A7age%20traversant%20de%20parois%20%C3%A0%20vitesse%20la%20plus%20r%C3%A9duite%20possible%20%C3%A0%20travers%20un%20SAS%20de%20gel%20hydrique%20%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv3_3Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2002%2C%20Percement%20de%20parois%20au%20travers%20une%20poche%20de%20gel%20hydrique%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv3_4Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2002bis%2C%20Per%C3%A7age%20de%20parois%20au%20travers%20une%20capsule%20de%20gel%20hydrique%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";

const interv4Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2007%2C%20Casse%20de%20fourreau%20en%20amiante%20ciment%20en%20milieu%20ext%C3%A9rieur%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv5Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2008%2C%20Intervention%20dans%20des%20niches%20en%20fibrociments%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv6Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2008bis%2C%20Remplacement%20d%27une%20niche%20en%20fibrociments%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";
const interv7Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Chimique%20(amiante,%20CO,...)/Amiante/Modes%20Op%C3%A9ratoires%20-%20Vidéos/Amiante,%20Mode%20Op%C3%A9ratoire%20-%20La%20totalité%20v05062021.pdf#page=53";
const interv8Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Chimique%20(amiante,%20CO,...)/Amiante/Modes%20Op%C3%A9ratoires%20-%20Vidéos/Amiante,%20Mode%20Op%C3%A9ratoire%20-%20La%20totalité%20v05062021.pdf#page=57";
const interv9Url  = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Chimique%20(amiante,%20CO,...)/Amiante/Modes%20Op%C3%A9ratoires%20-%20Vidéos/Amiante,%20Mode%20Op%C3%A9ratoire%20-%20La%20totalité%20v05062021.pdf#page=61";
const interv10Url = "https://grdf.sharepoint.com/teams/Prevention_Sante_Securite_de_la_DR_IDF/Maitrise%20des%20risques/Forms/AllItems.aspx?viewid=961d002f%2D11d6%2D46fc%2D912e%2D198da788eb23&FolderCTID=0x0120006FFC4DDA3A4CF443BC5A9747F653DF17&id=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os%2FAmiante%2C%20Mode%20Op%C3%A9ratoire%20%2D%20MO%2013%2C%20D%C3%A9garnissage%20d%27une%20parois%20contenant%20de%20l%27amiante%2Epdf&parent=%2Fteams%2FPrevention%5FSante%5FSecurite%5Fde%5Fla%5FDR%5FIDF%2FMaitrise%20des%20risques%2FChimique%20%28amiante%2C%20CO%2C%2E%2E%2E%29%2FAmiante%2FModes%20Op%C3%A9ratoires%20%2D%20Vid%C3%A9os";


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
  interv2_1:  interv2_1Url,  interv2_2:  interv2_2Url,
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
