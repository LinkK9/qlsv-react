import React from "react";
import { Card, Avatar, Typography } from "antd";
import { FaFemale, FaMale } from "react-icons/fa";
import Styles from "./StudentCard.module.css";

const { Text } = Typography;

const StudentCard = ({ id, name, avatar, phone, gender }) => {
  return (
    <div className={Styles.cardBody}>
      <div className={Styles.avatar}>
        <Avatar src={avatar} size={40} style={{ marginRight: 8 }}>
          L
        </Avatar>
        <div>
          <Text strong style={{ fontSize: 18 }}>
            {name}
          </Text>
          <div>
            <Text type="secondary">{phone}</Text>
          </div>
        </div>
      </div>
      <div>
        {gender === "Female" ? (
          <FaFemale style={{ fontSize: 24, color: "pink" }} />
        ) : (
          <FaMale style={{ fontSize: 24, color: "#1890ff" }} />
        )}
      </div>
    </div>
  );
};

export default StudentCard;
