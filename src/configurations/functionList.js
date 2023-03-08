import { localvalue } from "./localvalue";


const Retour = ()=>{
    window.history.back();
}
export default Retour;


// user
export const SetInformationUser = (item)=>{
    localStorage.setItem(localvalue.idUser,item);
}

export const SetInformationProject = (item)=>{
    localStorage.setItem(localvalue.idProject,item);
}

export const SetInformationService = (item)=>{
    localStorage.setItem(localvalue.idService,item);
}