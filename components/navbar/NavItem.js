import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function NavItem(props) {
  const router = useRouter();
  return (
    <li className="cursor-pointer hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-zinc-900">
      <Link href={props.href ?? "/"}>
        <a
          className={router.asPath == props.href ? "underline" : "no-underline"}
        >
          <span className="xl:py-5 block text-sm font-medium py-3 xl:px-5 px-8">
            {props.children}
          </span>
        </a>
      </Link>
    </li>
  );
}
