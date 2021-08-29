import React from "react";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div>
      <div>{value === index && <div>{children}</div>}</div>
    </div>
  );
};

export default TabPanel;
