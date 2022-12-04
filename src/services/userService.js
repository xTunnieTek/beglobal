import {
  API_LOGIN,
  API_GET_USER,
  API_GET_GENDERED_USERS,
  API_GET_MATCHES,
  API_USER_UPDATE,
} from "../config/API-config";
import axiosClient from "./http-common";
import axios from "axios";

export const getUser = async (id) => {
    return axiosClient.get(API_GET_USER,{
        params: {userId:id}
    })
};
