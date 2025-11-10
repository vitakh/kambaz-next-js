/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

export const api = axios.create({  baseURL: HTTP_SERVER , withCredentials: true });
export const signin  = (credentials: any) => api.post(`${USERS_API}/signin`, credentials).then(r => r.data);

export const profile = () => api.post(`${USERS_API}/profile`).then(r => r.data);

export const signup  = (user: any) => api.post(`${USERS_API}/signup`, user).then(r => r.data);

export const signout = () => api.post(`${USERS_API}/signout`).then(r => r.data);

export const updateUser = (user: any)    => api.put(`${USERS_API}/${user._id}`, user).then(r => r.data);

export const enrollUserInCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/enroll/${course._id}`);
  return data; 
}

export const unenrollUserFromCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.delete(`${USERS_API}/unenroll/${course._id}`); 
  return data; 
}

export const fetchAllEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/enrollments`); 
  return data; 
}

export const findMyEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await api.get("/api/users/current");
  return data; 
};