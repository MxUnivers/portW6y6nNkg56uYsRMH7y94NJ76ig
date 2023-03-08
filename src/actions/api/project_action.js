import axios from "axios";
import { redirect } from "react-router-dom";
import { baseurl } from "../../configurations/baseUrl";


export const CreateNewProject = async (
    name, coverPicture, description, content
) => {
    var data = JSON.stringify({
        "name": name,
        "coverPicture": coverPicture,
        "description": description,
        "content": content,
    });
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/projects/`,
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




export const UpdateProject = async (id, name, coverPicture, description, content, visible) => {
    var data = JSON.stringify({
        "name": name,
        "description": description,
        "coverPicture": coverPicture,
        "content": content,
        "visible": visible
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/projects/${id}`,
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
export const LoadAllProjects = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/projects/get/all`, {
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

export const LoadAllProjectById = async (id, name, coverPicture, description, content, visible) => {
    await axios.get(`${baseurl.urlapi}/api/v1/projects/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.name);
            coverPicture(response.data.coverPicture);
            description(response.data.description);
            content(response.data.content);
            visible(response.data.visible);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const DeleteProject = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/projects/hide/${id}`, {
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

export const RecycleProject = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/projects/show/${id}`, {
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