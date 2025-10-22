/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Modal, Button } from "react-bootstrap";

export default function DeleteAssignment({ show, handleClose, dialogTitle, assignment, deleteAssignment}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignment: any; deleteAssignment: (assignmentId: string) => void }) {
    
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    Are you sure you want to remove assignment {assignment.title}?
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      deleteAssignment(assignment._id);
      handleClose();
     }} > Delete </Button>
   </Modal.Footer>
  </Modal>
);}
