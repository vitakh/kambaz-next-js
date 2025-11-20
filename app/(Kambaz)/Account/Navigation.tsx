/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

   return (
   <Nav variant="pills">
     {links.map((link) => (
       <NavItem key={link}>
         <NavLink as={Link} href={link} active={pathname.endsWith(link.toLowerCase())}>
           {link} </NavLink> 
           {currentUser && currentUser.role === "ADMIN" && (
       <NavLink as={Link} href={`/Account/Users`}  active={pathname.endsWith('Users')}> Users </NavLink> )}
       </NavItem>
     ))}
   </Nav>
);}


//  return (
//    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 mt-2">
//      <Link href="Signin" className="list-group-item active border-0 mb-2" > Signin </Link>
//      <Link href="Signup" className="list-group-item text-danger border-0 mb-2"> Signup </Link>
//      <Link href="Profile" className="list-group-item text-danger border-0 mb-2"> Profile </Link>
//    </div>
// );}
