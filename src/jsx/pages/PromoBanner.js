import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ActiveBannerImageTable from "../components/ActiveBannerImageTable";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewBannerImageTable from "../components/ViewBannerImageTable";
import ViewPoolingTable from "../components/ViewPoolingTable";

export default function PromoBanner() {
  return (
    <>
      <ActiveBannerImageTable />
    </>
  );
}
