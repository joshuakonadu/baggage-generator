function getPersonalNeedsGeneralCards() {
  return [
    { icon: "fas fa-glasses", text: "Brille", id: 70 },
    { icon: "fas fa-glasses", text: "Kontaktlinsen", id: 71 },
    { icon: "fas fa-book", text: "Bücher", id: 72 },
    { icon: "fas fa-dice", text: "Gesellschaftsspiele", id: 73 },
  ];
}

function getPersonalNeedsTechnologyCards() {
  return [
    { icon: "fas fa-camera-retro", text: "Kamera (Foto/Video)", id: 74 },
    { icon: "fas fa-laptop", text: "Notebook", id: 75 },
    { icon: "fas fa-tablet-alt", text: "Tablet", id: 76 },
    { icon: "fas fa-mobile-alt", text: "eBook-Reader", id: 77 },
  ];
}

function getPersonalNeedsMedicineCards() {
  return [
    { icon: "fas fa-first-aid", text: "Reiseapotheke", id: 78 },
    { icon: "fas fa-capsules", text: "Malariamedikament", id: 79 },
  ];
}

export {
  getPersonalNeedsGeneralCards,
  getPersonalNeedsTechnologyCards,
  getPersonalNeedsMedicineCards,
};
