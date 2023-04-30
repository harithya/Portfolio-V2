import React from "react";
import Section from "../components/layouts/Section";

const Blog = () => {
  return (
    <Section title={"Blog"}>
      <div className={"grid grid-cols-3 gap-5 "}>
        <div className={"border border-2 border-dashed"}>
          <div className={"w-full h-56 bg-blue-200"}></div>
          <div className={"p-4"}>
            <h4 className={"font-medium text-lg line-clamp-2 mb-4"}>
              Switching to Tailwind CSS
            </h4>
            <p className={"text-sm line-clamp-3 leading-7 text-gray-600"}>
              This blog was initaly using Chakra UI. But, i found some issues
              about FODT(Flashing of the Dark Theme) and they have not solved
              this issues yet.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
