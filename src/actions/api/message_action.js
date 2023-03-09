import axios from "axios";
import { redirect } from "react-router-dom";
import { baseurl } from "../../configurations/baseUrl";


export const CreateNewMessage = async (
    name, email, subject, content
) => {
    var data = JSON.stringify({
        "name": name,
        "email": email,
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

export const LoadAllMessagesArchive = async (SetState) => {
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

export const LoadAllMessageById = async (id,name, email, subject, content) => {
    await axios.get(`${baseurl.urlapi}/api/v1/messages/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.name);
            email(response.data.coverPicture);
            subject(response.data.description);
            content(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const DeleteMessage = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/messages/hide/${id}`, {
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

export const RecycleMessage = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/messages/show/${id}`, {
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