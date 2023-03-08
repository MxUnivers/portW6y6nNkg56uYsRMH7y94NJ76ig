import axios from "axios";
import { redirect } from "react-router-dom";
import { baseurl } from "../../configurations/baseUrl";


export const CreateNewService = async (
    name,coverPicture,description
    ) => {
    var data = JSON.stringify({
        "name": name,
        "coverPicture": coverPicture,
        "description": description,
    });
    var config = {
        method: 'post',
        url: `${baseurl.urlapi}/api/v1/services/`,
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




export const UpdateService = async (id, name,coverPicture,description, visible) => {
    var data = JSON.stringify({
        "name": name,
        "description": description,
        "coverPicture": coverPicture,
        "visible":visible
    });
    var config = {
        method: 'put',
        url: `${baseurl.urlapi}/api/v1/services/${id}`,
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
export const LoadAllServices = async (SetState) => {
    await axios.get(`${baseurl.urlapi}/api/v1/services/get/all`, {
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

export const LoadAllServiceById = async (id,name,coverPicture,description,visible) => {
    await axios.get(`${baseurl.urlapi}/api/v1/services/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.name);
            coverPicture(response.data.coverPicture);
            description(response.data.description);
            visible(response.data.visible);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const DeleteService = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/services/hide/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const RecycleService = async (id) => {
    await axios.put(`${baseurl.urlapi}/api/v1/services/show/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}