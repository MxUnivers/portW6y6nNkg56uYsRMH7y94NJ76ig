import axios from "axios";
import { baseurl } from "../../configurations/baseUrl";


export const CreateNewUser = async (
    username, firstname, lastname, email, telephone, password
    ) => {
    var data = JSON.stringify({
        "username": username,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "telephone": telephone,
        "password": password,
    });
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/users/`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}




export const UpdateUser = async (id, username, firstname, lastname, email, telephone, description, typeUser) => {
    var data = JSON.stringify({
        "username": username,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "telephone": telephone,
        "description": description,
        "typeUser": typeUser
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/users/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}




// Charger
export const LoadAllUsers = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/users/get/all`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            SetState(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}