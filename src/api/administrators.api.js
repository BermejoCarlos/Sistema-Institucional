import { axios } from "@/config/axios.config";


// G E T   A L L   A D M I N I S T R A T O R S
export const getAdministrators = async () => axios.get("/administrators");


// A D D   A D M I N I S T R A T O R S
export const addAdministrator = async (data) => axios.post("administrators/add", data);


// G E T   A D M I N I S T R A T O R
export const getAdministrator = async (id) =>  axios.get(`/administrators/${id}`);


// D E L E T E   A D M I N I S T R A T O R
export const deleteAdministrator = async (id) => axios.delete(`administrators/${id}`);


// U P D A T E   A D M I N I S T R A T O R
export const updateAdministrator = async (id) => axios.get(`administrators/${id}`);