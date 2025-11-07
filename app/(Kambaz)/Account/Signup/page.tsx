/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from "next/link";
import { Form } from "react-bootstrap";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";


export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" className="ms-3">
      <h1>Sign up</h1>
      <Form.Control value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username mb-2 w-50" placeholder="username"/>
      <Form.Control value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
             className="wd-password mb-2 w-50" placeholder="password" type="password"/>
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-50"> Sign up </button><br />
      <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
);}
