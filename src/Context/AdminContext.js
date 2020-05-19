import  {createContext} from "react";

const AdminContext = createContext([
    {
        firstName : "Erika",
        lasName : "Flores",
        nickName : "Daedra",
        suffix : 1,
        email : "foglzerika@gmail.com"

    },
    obj => obj
]);

export default AdminContext;