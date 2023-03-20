import axios from "axios";
import { baseurl } from "../../configurations/baseUrl";
import { routing } from "../../configurations/routing";


export const CreateNewUser = async (
    username, firstname, lastname, email, telephone, password,redirect
    ) => {
        console.log(username, firstname,lastname,email,telephone,password);
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
            redirect(`/${routing.admin}/${routing.userlist}`);
        })
        .catch(function (error) {
            console.log(error);
        });
}




export const UpdateUser = async (id, username, firstname, lastname, email, telephone, redirect) => {
    var data = JSON.stringify({
        "username": username,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "telephone": telephone,
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
            redirect(`/${routing.admin}/${routing.userlist}`);
        })
        .catch(function (error) {
            console.log(error);
        });
}



export const DeleteUser = async (id, redirect) => {
    await axios.put(`${baseurl.urlapi}/api/v1/users/hide/${id}`)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.reload();
            redirect(`/${routing.admin}/${routing.userlist}`);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const ShowUser = async (id, redirect) => {
    await axios.put(`${baseurl.urlapi}/api/v1/users/show/${id}`)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.reload();
            redirect(`/${routing.admin}/${routing.userlist}`);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const UpdateUserPassword = async (id,password, redirect) => {
    var data = JSON.stringify({
        "password": password
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/auth/password/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.location.reload();
            redirect(`/${routing.admin}/${routing.userlist}`);

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

export const LoadAllUsersArchives = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/users/get/all/archives`, {
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


export const LoadAllUserById = async (
    id, username, firstname, lastname, email, telephone) => {
    await axios.get(`${baseurl.urlapi}/api/v1/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            username(response.data.data.username);
            firstname(response.data.data.firstname);
            lastname(response.data.data.lastname);
            email(response.data.data.email);
            telephone(response.data.data.telephone);
        })
        .catch(function (error) {
            console.log(error);
        });
}