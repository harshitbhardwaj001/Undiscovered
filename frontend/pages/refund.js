import React from "react";

const refund = () => {
  return (
    <div className="min-h-[56vh]">
      <h1 className="text-center text-[2rem] font-bold mt-[2rem] pb-[3rem]">
        Cancellation and Refund Policy
      </h1>
      <p className="text-[2rem] leading-[3rem] text-center mt-[1rem] pb-[5rem] px-[2rem]">
        UNFORTUNATELY, AS PER STORE POLICY, CANCELLATION, REFUNDS AND RETURNS
        ARE NOT POSSIBLE AGAINST ANY ORDERS.
      </p>
      {/* <p className="text-[2rem] leading-[3rem] text-center mt-[-2rem] pb-[5rem] px-[2rem]">
        ALL EXCHANGES WILL UNDERGO A QUALITY CHECK BY OUR TEAM. WE RESERVE THE
        RIGHT TO DECLINE AN EXCHANGE IF: THE PRODUCT/S ARE RETURNED AFTER USE.
        THE PRODUCTS ARE DAMAGED.
      </p> */}
    </div>
  );
};

export default refund;
