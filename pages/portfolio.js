import React, { useState } from "react";
import Section from "../components/layouts/Section";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioDetail from "../components/portfolio/PortfolioDetail";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import { useRouter } from "next/router";

export default function Portofolio({ portfolios }) {
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const handleOpenModal = (value) => {
    setSingleData(value);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  const router = useRouter();
  const handleFilter = (e) => {
    const value = e.target.value;
    if (value !== "all") {
      router.query.filter = value;
      router.push(router);
    } else {
      router.push("/portfolio");
    }
  };

  const nextData = () => {
    const index = portfolios.findIndex((value) => value._id === singleData._id);
    if (index + 1 < portfolios.length) {
      setSingleData(portfolios[index + 1]);
    }
  };

  const prevData = () => {
    const index = portfolios.findIndex((value) => value._id === singleData._id);
    if (index - 1 >= 0) {
      setSingleData(portfolios[index - 1]);
    }
  };

  return (
    <Section
      title="Portfolio"
      subtitle="Beberapa pekerjaan yang sudah saya kerjakan sampa saat ini."
      action={
        <select
          className="text-gray-500 ring-0 dark:border-gray-600 dark:bg-black dark:text-white outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm"
          onChange={handleFilter}
        >
          <option value="all">Semuanya</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="Web Application">Web Application</option>
          <option value="Web Design">Web Design</option>
        </select>
      }
    >
      <MetaSeo
        title="Portfolio - Harithya Wisesa"
        description={
          "Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."
        }
      />
      <div
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6"
        data-aos="fade-up"
      >
        {portfolios.map((value) => (
          <Portfolio
            key={value._id}
            img={constant.storage + `${value.img?.path}`}
            title={value.title}
            category={value.category}
            onClick={() => handleOpenModal(value)}
          />
        ))}
      </div>
      <PortfolioDetail
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={singleData}
      >
        {isOpen && (
          <>
            <button
              onClick={prevData}
              className="fixed ml-5 left-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextData}
              className="fixed mr-5 right-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </PortfolioDetail>
    </Section>
  );
}

export async function getServerSideProps({ query }) {
  let url = "items/portfolio";
  if (query.filter) {
    const params = encodeURIComponent(
      JSON.stringify({ category: query.filter })
    );
    const filter = `?filter=${params}`;
    url = `items/portfolio${filter}`;
  }
  const req = await http.get(url);
  return {
    props: {
      portfolios: req.data,
    },
  };
}
