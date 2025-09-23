'use client';
import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <Form.Control placeholder="username" id="wd-username" className="mb-2"/>
      <Form.Control placeholder="password" type="password" id="wd-password" className="mb-2"/>
      <Form.Control placeholder="verify password"
             type="password" id="wd-password-verify" className="mb-2"/>
      <Link  href="Profile" id="wd-signup-btn" className="btn btn-primary w-100 mb-2"> Sign up </Link>
      <Link  href="Signin"  id="wd-signin-link"> Sign in </Link>
    </div>
);}
