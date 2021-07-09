import React from "react";
import { Avatar, Typography } from "antd";
import { FaFemale, FaMale } from "react-icons/fa";
import Styles from "./StudentCard.module.css";
import { getAvatarUrlFromFileName } from "../../utils/Utils";
import { Link } from "react-router-dom";

const { Text } = Typography;

const StudentCard = ({ id, name, avatar, phone, gender }) => {
  return (
    <Link to={`/modify-student/${id}`}>
      <div className={Styles.cardBody}>
        <div className={Styles.avatar}>
          <Avatar
            alt={avatar}
            src={getAvatarUrlFromFileName(avatar)}
            size={40}
            style={{ marginRight: 8 }}
          />
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
    </Link>
  );
};

export default StudentCard;
