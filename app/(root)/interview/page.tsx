import Agent from "@/components/Agent";
import React from "react";

const Page = () => {
  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName="you" userId="user1" type="generate" />
    </>
  );
};

export default Page;
