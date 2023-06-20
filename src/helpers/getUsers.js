export const getUsers = async() =>{
    try{
        const url = "https://jsonplaceholder.typicode.com/users";
        const resp = await fetch(url);
        const respJson = await resp.json();
        return respJson;
    }
    catch(error){
        console.log("No se Pudo procesar la solicitud" + error);
    }
};