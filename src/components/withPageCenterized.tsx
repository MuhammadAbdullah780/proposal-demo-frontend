import React, { FC } from "react";

interface Props {
  component?: React.ReactNode;
}

const WithPageCenterized: FC<Props> = ({ component = <></> }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      {component}
    </div>
  );
};

export default WithPageCenterized;
