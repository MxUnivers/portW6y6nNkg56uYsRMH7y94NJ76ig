import axios from "axios";
import { redirect } from "react-router-dom";
import { baseurl } from "../../configurations/baseUrl";
import { routing } from "../../configurations/routing";


export const CreateNewProject = async (
    name, coverPicture, description, content, link, redirect
) => {
    var data = JSON.stringify({
        "name": name,
        "coverPicture": coverPicture,
        "description": description,
        "content": content,
        "link": link
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
            // console.log(JSON.stringify(response.data));
            window.location.reload();
            redirect(`/${routing.admin}/${routing.project_list}`);

        })
        .catch(function (error) {
            console.log("");
        });
}




export const UpdateProject = async (id, name, coverPicture, description, content, link, visible, redirect) => {
    var data = JSON.stringify({
        "name": name,
        "description": description,
        "coverPicture": coverPicture,
        "content": content,
        "visible": visible,
        "link": link
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/projects/edit/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            window.location.reload();
            redirect(`/${routing.admin}/${routing.project_list}`);

        })
        .catch(function (error) {
            console.log("");
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
            // console.log(JSON.stringify(response.data));
            SetState(response.data.data);
        })
        .catch(function (error) {
            console.log("");
        });
}


export const LoadAllProjectsArchives = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/projects/get/all/archives`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            SetState(response.data.data);
        })
        .catch(function (error) {
            console.log("");
        });
}


export const LoadAllProjectById = async (id, name, coverPicture, description, content, link, visible) => {
    await axios.get(`${baseurl.urlapi}/api/v1/projects/project/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.data.name);
            coverPicture(response.data.data.coverPicture);
            description(response.data.data.description);
            content(response.data.data.content);
            link(response.data.data.link);
            visible(response.data.data.visible);
        })
        .catch(function (error) {
            console.log("");
        });
}


// recupérer un projet par son titre
export const LoadAllProjectByTtitle = async (id, name, coverPicture, description, content, link, visible) => {
    await axios.get(`${baseurl.urlapi}/api/v1/projects/project_title/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.data.name);
            coverPicture(response.data.data.coverPicture);
            description(response.data.data.description);
            content(response.data.data.content);
            link(response.data.data.link);
            visible(response.data.data.visible);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const DeleteProject = async (id, redirect) => {
    await axios.delete(`${baseurl.urlapi}/api/v1/projects/hide/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.message));
            redirect(`/${routing.admin}/${routing.project_list}`);

        })
        .catch(function (error) {
            console.log(error);
        });
}

export const RecycleProject = async (id, redirect) => {
    await axios.delete(`${baseurl.urlapi}/api/v1/projects/show/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.message));
            redirect(`/${routing.admin}/${routing.project_list}`);

        })
        .catch(function (error) {
            console.log(error);
        });
}