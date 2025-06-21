import React from "react";
import Navbar from "../navbar/Navbar";
import SwitchMode from "../SwitchMode";

export default function MainLayout({ children }) {
  return (
    <div className=" dark:bg-black ">
      <Navbar />
      <div className="relative main-body min-h-screen lg:pt-20 pt-10">
        <div className="xl:px-60 px-8 ">{children}</div>
        <SwitchMode />
        <footer className="text-center absolute bottom-0 right-0 left-0 py-5 mt-10">
          <span className="xl:text-sm text-xs  font-medium">
            Copyright © 2021 Haruthya. inspiration{" "}
            <a
              rel="noreferrer"
              target={"_blank"}
              className="underline text-blue-500"
              href="https://www.wisesa.dev/"
            >
              wisesa.dev
            </a>{" "}
            & illustration{" "}
            <a
              rel="noreferrer"
              target={"_blank"}
              className="underline text-blue-500"
              href="https://weareskribbl.com/"
            >
              weareskribbl.com
            </a>{" "}
          </span>
        </footer>
      </div>
    </div>
  );
}
