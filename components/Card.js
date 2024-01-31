import React from "react";

export default function Card(props) {
  return (
    <div className="border-2 rounded-md cursor-pointer border-dashed dark:border-gray-600">
      {props.children}
    </div>
  );
}
