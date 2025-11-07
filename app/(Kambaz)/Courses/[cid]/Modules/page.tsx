/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
'use client';
import React, { useState, useEffect } from "react";
import * as client from "../../client";
import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const newModule = { name: moduleName, course: courseId };
    const mod = await client.createModuleForCourse(courseId, newModule);
    dispatch(setModules([...modules, mod]));
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse } />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .map((module: any) => (
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary border-top border-black">
            <BsGripVertical className="me-2 fs-3" />
            {!module.editing && module.name}
            { module.editing && (
        <FormControl className="w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                    onUpdateModule({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )}
            <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
          </div>
          {module.lessons && (
          <ListGroup className="wd-lessons rounded-0">
            {module.lessons.map((lesson: any) => (
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              {lesson.name} <LessonControlButtons />
            </ListGroup.Item>))}
          </ListGroup>)}
        </ListGroup.Item>))}
      </ListGroup>
    </div>
  );
}
