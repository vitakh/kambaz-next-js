/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "next/navigation";
import AssignmentCheckControlButtons from "./AssignmentCheckControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "../../client";
import { useEffect } from "react";

export default function Assignments() {
  const {cid} = useParams();
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  const onRemoveAssignment = async (aid: string) => {
    await client.deleteAssignment(aid);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== aid)));
  };

    function parseDate(date: any) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  }


  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3"/>
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3 text-success" />
              <div className="flex-grow-1 ms-2">
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  {assignment.title}
                </Link>
                <br />
                <div className="small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> {parseDate(assignment.from_date) || "TBD"} |<br />
                  <b>Due</b> {parseDate(assignment.due_date) || "TBD"} | {assignment.points || 100} pts
                </div>
              </div>
              <AssignmentCheckControlButtons assignment={assignment} deleteAssignment={(assignmentId) => onRemoveAssignment(assignmentId)}/>
            </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
