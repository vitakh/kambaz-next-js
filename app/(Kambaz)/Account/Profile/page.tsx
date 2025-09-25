'use client';

import Link from "next/link";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="ms-3">
      <h1>Profile</h1>
      <Form.Control
        defaultValue="alice"
        placeholder="username"
        id="wd-username"
        className="mb-2 w-50"
      />
      <Form.Control
        defaultValue="123"
        placeholder="password"
        type="password"
        id="wd-password"
        className="mb-2 w-50"
      />
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2 w-50"/>
      <Form.Control
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-50"
      />
      <Form.Control placeholder="mm-dd-yyyy" type="date" id="wd-dob" className="mb-2 w-50"/>
      <Form.Control defaultValue="alice@wonderland.com" type="email" id="wd-email" className="mb-2 w-50"/>
      <Form.Select defaultValue="USER" id="wd-role" className="mb-2 w-50">
        <option value="USER">User</option> 
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link href="Signin" className="btn btn-danger w-50 mb-2"> Sign out </Link>
    </div>
  );
}
