import React from "react";

const support = () => {
  return (
    <div className="min-h-[56vh]">
      <h1 className="text-center text-[2rem] font-bold mt-[2rem] pb-[3rem]">
        Customer Support
      </h1>
      <p className="text-[2rem] leading-[3rem] text-center mt-[1rem] pb-[5rem] px-[2rem]">
        IF YOU RECEIVE A DEFECTIVE PRODUCT, SHARE ORDER DETAILS AND IMAGES AT
        <a href="https://mail.google.com/" className="text-[#33419c]">
          {" "}
          undiscovered.helpdesk@gmail.com{" "}
        </a>
        AND WE WILL RESPOND WITHIN 24 HOURS.
      </p>
    </div>
  );
};

export default support;
