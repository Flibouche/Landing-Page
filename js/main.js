/*=============== SHOW MENU ===============*/

// Sélection des éléments du DOM
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Affichage du menu lorsque le bouton de bascule est cliqué
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Masquage du menu lorsque le bouton de fermeture est cliqué
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

// Sélection de tous les liens de navigation
const navLink = document.querySelectorAll(".nav__link");

// Fonction pour masquer le menu lorsqu'un lien est cliqué
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

// Ajout d'un écouteur d'événements à chaque lien de navigation
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHOW SCROLL UP ===============*/

// Fonction pour afficher le bouton de retour en haut de page lors du défilement
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Ajoute la classe "show-scroll" si le défilement vertical atteint ou dépasse 450 pixels
  this.scrollY >= 450
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

// Ajout d'un écouteur d'événements de défilement à la fenêtre
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Sélection de toutes les sections avec un attribut 'id'
const sections = document.querySelectorAll("section[id]");

// Fonction pour mettre en surbrillance le lien de navigation correspondant à la section visible
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 300,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    // Ajoute la classe "active-link" au lien de navigation correspondant à la section visible
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Ajout d'un écouteur d'événements de défilement à la fenêtre pour mettre à jour les liens actifs
window.addEventListener("scroll", scrollActive);