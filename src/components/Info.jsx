import React from "react";

const Info = () => {
  return (
    <div className="bg-gray-200 text-gray-800 p-6 rounded-lg border border-gray-300 mt-4">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 material-symbols-outlined">Info</span>
      </div>
      <ul className="list-disc pl-6">
        <li className="mb-2">Press '#' followed by 'space' for following text to be in Heading 1</li>
        <li className="mb-2">Press '*' followed by 'space' for following text to be in bold </li>
        <li className="mb-2">Press '**' followed by 'space' for following text to be in red color</li>
        <li className="mb-2">Press '***' followed by 'space' for following text to be underlined</li>
        <li className="mb-2">Press '```' followed by 'space' for following text to be highlighted code</li>
      </ul>
    </div>
  );
};

export default Info;
