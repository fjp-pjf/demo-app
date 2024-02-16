import React, { useState } from "react";
import Styles from "@/styles/components/card.module.scss";
import Image from "next/image";
import Alert from "react-bootstrap/Alert";

const ClientCard = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={
        data.role === "member"
          ? Styles.cardContainer
          : Styles.cardContainerAdmin
      }
    >
      <Image
        src={data?.img}
        alt={"image"}
        width={50}
        height={50}
        className={Styles.avatar}
      />
      <div className={Styles.info}>
        <p
          className={Styles.name}
        >{`${data?.first_name} ${data?.last_name}`}</p>
        <p className={Styles.email}>{data?.email}</p>
      </div>
    </div>
  );
};

export default ClientCard;
