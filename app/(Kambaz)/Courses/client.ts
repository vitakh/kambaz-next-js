/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
 
const BASE_URL = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
 
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const COURSES_API = `${BASE_URL}/api/courses`;

export const findUsersForCourse = async (courseId: string) => {
 //const response = await axios.get(`${COURSES_API}/${courseId}/users`);
 const response = await api.get(`/api/courses/${courseId}/users`);
 return response.data;
};
 
export const fetchAllCourses = async () => {
  const { data } = await api.get("/api/courses");
  return data;
};
 
export const findMyCourses = async () => {
  const { data } = await api.get("/api/users/current/courses");
  return data;
};
 
export const createCourse = async (course: any) => {
  const { data } = await api.post("/api/users/current/courses", course);
  return data;
};
 
export const deleteCourse = async (id: string) => {
  const { data } = await api.delete(`/api/courses/${id}`);
  return data;
};
 
export const updateCourse = async (course: any) => {
  const { data } = await api.put(`/api/courses/${course._id}`, course);
  return data;
};
 
export const createModuleForCourse = async (courseId: string, module: any) => {
  const { data } = await api.post(`/api/courses/${courseId}/modules`, module);
  return data;
};
 
export const findModulesForCourse = async (courseId: string) => {
  const { data } = await api.get(`/api/courses/${courseId}/modules`);
  return data;
};
 
export const deleteModule = async (moduleId: string) => {
  const { data } = await api.delete(`/api/modules/${moduleId}`);
  return data;
};
 
export const updateModule = async (module: any) => {
  const { data } = await api.put(`/api/modules/${module._id}`, module);
  return data;
};
 
export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await api.get(`/api/courses/${courseId}/assignments`);
  return data;
};
 
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const { data } = await api.post(`/api/courses/${courseId}/assignments`, assignment);
  return data;
};
 
export const deleteAssignment = async (aid: string) => {
  const { data } = await api.delete(`/api/assignments/${aid}`);
  return data;
};
 
export const updateAssignment = async (assignment: any) => {
  const { data } = await api.put(`/api/assignments/${assignment._id}`, assignment);
  return data;
};