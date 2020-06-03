import React from "react";

const BodyWrapper: React.FC = ({children}) => {
  return (
    <div className="container">
      <div className="content">
        <div className="quest_widget"></div>
        {children}
      </div>
    </div>
  );
};

export default BodyWrapper;
