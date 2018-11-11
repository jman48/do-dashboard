import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { STATUS_ACTIVE, STATUS_NEW, STATUS_OFF } from "../constants";

function getStatusIcon(status) {
  switch (status) {
    case STATUS_ACTIVE:
    case STATUS_NEW:
      return <Icon style={{ color: "#29CC75" }} name="checkbox-blank-circle" />;
    case STATUS_OFF:
      return <Icon style={{ color: "#c1c1c1" }} name="checkbox-blank-circle" />;
    default:
      return <Icon style={{ color: "#f8fc00" }} name="checkbox-blank-circle" />;
  }
}

const Status = ({ status }) => {
  return getStatusIcon(status);
};

export default Status;
