/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button, Form } from "react-bootstrap";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
   setProfile(currentUser);
 };
 const signout = () => {
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };
 useEffect(() => {
   fetchProfile();
 }, []);

  return (
    <div id="wd-profile-screen" className="ms-3">
      <h1>Profile</h1>
      {profile && (
       <div>
      <Form.Control
        defaultValue={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value }) }
        placeholder="username"
        id="wd-username"
        className="mb-2 w-50"
      />
      <Form.Control
        placeholder="password"
        type="password"
        id="wd-password"
        className="mb-2 w-50"
        defaultValue={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value }) }
      />
      <Form.Control 
      defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) } 
           placeholder="First Name" id="wd-firstname" 
           className="mb-2 w-50"/>
      <Form.Control
        defaultValue={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) }
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-50"
      />
      <Form.Control placeholder="mm-dd-yyyy" type="date" id="wd-dob" className="mb-2 w-50"
      defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
      <Form.Control defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })} type="email" id="wd-email" className="mb-2 w-50"/>
      <Form.Select onChange={(e) => setProfile({ ...profile, role: e.target.value })} id="wd-role" className="mb-2 w-50">
        <option value="USER">User</option> 
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Button variant="danger" onClick={signout} className="w-100 mb-2" id="wd-signout-btn"> Sign out </Button>
    </div> )}
    </div>
  );
}
