import React, { useState } from "react";
// import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
// import CreateUser from "../components/CreateUser";
import UserManagementTable from "../components/UserManagementTable";

export default function UserManagement() {
  const [createUserModal, setCreateUserModal] = useState(false);

  return (
    <>
      <UserManagementTable />
    </>
  );
}
