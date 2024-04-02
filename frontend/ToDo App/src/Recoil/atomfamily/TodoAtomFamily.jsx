import {atomFamily, selectorFamily} from "recoil";
import axios from "axios";

export const todoFamily = atomFamily({
    key:'odoFamily',
    default: selectorFamily({
        key:'todoSelectorFamily',
        get:(id) => async ({get}) =>{
            const res =await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            console.log(res.data.todo)
            return res.data.todo
        }
    })
})