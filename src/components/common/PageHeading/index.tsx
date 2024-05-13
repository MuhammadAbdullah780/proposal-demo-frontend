import React from "react";

type Props = {
  text: string;
  description?: string;
};

const PageHeading = ({ text, description }: Props) => {
  return (
    <div>
      <h1 className="text-gray-600 italic font-sans font-semibold text-3xl">
        {text}
      </h1>
      {description && (
        <p className="text-gray-500 mt-2 text-sm max-w-3xl">{description}</p>
      )}
    </div>
  );
};

export default PageHeading;
