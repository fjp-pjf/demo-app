"use client";
import ClientCard from "@/components/ClientCard";
import Navbar from "@/components/Navbar";
import { getPeopleData } from "@/services/api.service";
import Styles from "@/styles/pages/main.module.scss";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  const [data, setData] = useState();
  async function fetchData() {
    const data = await getPeopleData();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const members = data?.filter((person) => person.role === "member");
  const admins = data?.filter((person) => person.role === "admin");

  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.cardsContainer}>
        <div className={Styles.adminContainer}>
          <div className={Styles.title}>Administrators</div>
          <Row className={Styles.cards}>
            {members?.length > 0 &&
              members?.map((member, index) => (
                <Col lg={4}>
                  <ClientCard data={member} key={`member_${index}`} />
                </Col>
              ))}
          </Row>
        </div>

        <div className={Styles.adminContainer}>
          <div className={Styles.title}>Members</div>
          <Row className={Styles.cards}>
            {admins?.length > 0 &&
              admins?.map((admin, index) => (
                <Col lg={4}>
                  <ClientCard data={admin} key={`admin_${index}`} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
