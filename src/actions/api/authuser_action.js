import axios from "axios";
import { baseurl } from "../../configurations/baseUrl";
import { localvalue } from "../../configurations/localvalue";
import { routing } from "../../configurations/routing";




export const AuthUser = async (username , password , setState,redirect) => {
    var data = JSON.stringify({
        "username": username,
        "password": password,
    });
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/auth/login/`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            localStorage.setItem(localvalue.tokenLogin , `${response.data.key}`);
            localStorage.setItem(localvalue.nameLogin , `${response.data.data.firstname} ${response.data.data.lastname}`);
            localStorage.setItem(localvalue.idLogin , `${response.data.data._id}`);
            redirect(`/${routing.admin}`);
        })
        .catch(function (error) {
            console.log(error);
            setState("nom d'utilisateur ou mot de passe incorrect !")
        });
}




export const DiconnectUser = async (id) => {
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/auth/disconnect/${id}`,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    await axios(config)
        .then(function (response) {
            console.log(response.data.message);
            localStorage.removeItem(localvalue.tokenLogin);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}

