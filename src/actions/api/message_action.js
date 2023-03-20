import axios from "axios";
import { redirect } from "react-router-dom";
import { baseurl } from "../../configurations/baseUrl";


export const CreateNewMessage = async (
    name, email,telephone, subject, content
) => {
    var data = JSON.stringify({
        "name": name,
        "email": email,
        "telephone": telephone,
        "subject": subject,
        "content": content,
    });
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/messages/`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            alert("Votre message à été envoyé , et sera traiter");
            console.log(JSON.stringify(response.data));
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}




export const UpdateMessage = async (id, name, coverPicture, description, content, visible) => {
    var data = JSON.stringify({
        "name": name,
        "description": description,
        "coverPicture": coverPicture,
        "content": content,
        "visible": visible
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/messages/${id}`,
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
export const LoadAllMessages = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/messages/get/all`, {
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

export const LoadAllMessagesArchives = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/messages/get/all/archives`, {
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

export const LoadAllMessageById = async (id,name, email,telephone, subject, content) => {
    await axios.get(`${baseurl.urlapi}/api/v1/messages/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.data.name);
            email(response.data.data.email);
            telephone(response.data.data.telephone);
            subject(response.data.data.subject);
            content(response.data.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const DeleteMessage = async (id) => {
    await axios.delete(`${baseurl.urlapi}/api/v1/messages/delete/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization":`${baseurl.tokenType} ${baseurl.authorization}`
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.message));
            window.history.back();
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const RecycleMessage = async (id) => {
    await axios.delete(`${baseurl.urlapi}/api/v1/messages/show/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.message));
        })
        .catch(function (error) {
            console.log(error);
        });
}