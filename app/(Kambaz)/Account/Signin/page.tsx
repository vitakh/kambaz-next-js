'use client';
import Link from "next/link";
import { Form } from "react-bootstrap";
export default function Signin() {
 return (
   <div id="wd-signin-screen" className="ms-3">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-50"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 w-50"/>
      <Link id="wd-signin-btn"
            href="/Account/Profile"
            className="btn btn-primary w-50 mb-2">
            Sign in </Link><br/>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div> );
    }