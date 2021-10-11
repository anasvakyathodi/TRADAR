import React from "react";

import { Icon } from "@iconify/react";

const DarkModeButton = ({ darkmode, setDarkMode }) => {
  return (
    <div
      className="cursor-pointer mt-4 ml-4 "
      onClick={() => {
        setDarkMode(!darkmode);
      }}
    >
      <Icon
        icon="entypo:moon"
        color={darkmode && "#ffff"}
        width="40"
        height="40"
        rotate={1}
      />
    </div>
  );
};

export default DarkModeButton;
