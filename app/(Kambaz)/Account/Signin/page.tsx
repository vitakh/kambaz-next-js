/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from "react";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { redirect } from "next/navigation";

export default function Signin() {
       const [credentials, setCredentials] = useState<any>({});
       const dispatch = useDispatch();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

 return (
   <div id="wd-signin-screen" className="ms-3">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-50" 
             defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 w-50"
             defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
      <Button id="wd-signin-btn" variant="primary"
            className="w-50 mb-2" onClick={signin}>
            Sign in </Button><br/>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div> );
    }