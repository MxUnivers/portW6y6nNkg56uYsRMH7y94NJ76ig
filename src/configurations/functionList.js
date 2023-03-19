import { localvalue } from "./localvalue";

// retour
const Retour = () => {
    window.history.back();
}
export default Retour;

// user
export const SetInformationUser = (item) => {
    localStorage.setItem(localvalue.idUser, item);
}

// project
export const SetInformationProject = (item) => {
    localStorage.setItem(localvalue.idProject, item);
}

// service
export const SetInformationService = (item) => {
    localStorage.setItem(localvalue.idService, item);
}

// message
export const SetInformationMessage = (item) => {
    localStorage.setItem(localvalue.idMessage, item);
}

// visite count
export const VisitCount = () => {
    // Vérifie si le navigateur prend en charge localStorage
    if (typeof (Storage) !== "undefined") {
        // Vérifie si le compteur de visites est stocké localement
        if (localStorage.visitCount) {
            // Incrémente le compteur de visites
            localStorage.visitCount = Number(localStorage.visitCount) + 1;
            // Enregistre la date de la dernière visite
            localStorage.lastVisit = new Date().toString();
        } else {
            // Initialise le compteur de visites à 1 et enregistre la date de la première visite
            localStorage.visitCount = 1;
            localStorage.firstVisit = new Date().toString();
        }
        // Affiche le nombre de visites sur la page et la date de la dernière visite
        document.write("Vous avez visité cette page " + localStorage.visitCount + " fois.");
        if (localStorage.lastVisit) {
            document.write(" Dernière visite le " + localStorage.lastVisit + ".");
        }
    } else {
        // Si le navigateur ne prend pas en charge localStorage
        document.write("Désolé, votre navigateur ne prend pas en charge le stockage local.");
    }
}




