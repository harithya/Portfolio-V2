import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Harithya Wisesa",
  description:
    "Explore the portfolio of Harithya Wisesa, featuring web and mobile applications built with Laravel, React, Vue, and modern technologies.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
