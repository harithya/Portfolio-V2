import React from "react";
import Card from "../Card";
import Image from "next/image";

export default function Portfolio(props) {
  return (
    <Card>
      <a onClick={props.onClick} className="relative h-10">
        <Image
          src={props.img}
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
          className="rounded-t-md"
          alt={props.title}
        />
        <div className="p-3">
          <h5 className="font-semibold xl:text-base xl:mb-2 text-sm">
            {props.title}
          </h5>
          <span className="text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs">
            {props.category}
          </span>
        </div>
      </a>
    </Card>
  );
}
