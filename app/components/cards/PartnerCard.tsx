import React from "react";

const PartnerCard = () => {
  return (
    <section className="container mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-3 mb-10">
      <div className="group relative m-3 h-[300px] max-w-xl overflow-hidden rounded-xl bg-red-200">
        <div className="absolute left-16 rounded-b-xl bg-white px-3 py-2 z-10">
          <p className="text-sm font-medium">Earn more with lower Fee</p>
        </div>
        <img
          src="/Images/Partner1.png"
          alt=""
          className="h-full w-full object-cover duration-200 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-tr from-black to-transparent">
          <div className="m-5  p-4">
            <p className="text-sm text-orange-400">Signup as a Business</p>
            <p className="mb-2 text-3xl font-bold text-white">
              Partner With US
            </p>
            <button className="rounded-2xl bg-orange-500 px-5 py-2 text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Second Card (same as the first one) --> */}
      <div className="group relative m-3 h-[300px] max-w-xl overflow-hidden rounded-xl bg-red-200">
        <div className="absolute left-16 rounded-b-xl bg-white px-3 py-2 z-10">
          <p className="text-sm font-medium">Earn more with lower Fee</p>
        </div>
        <img
          src="/Images/ride.png"
          alt=""
          className="h-full w-full object-cover duration-200 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-tr from-black to-transparent">
          <div className="m-5  p-4">
            <p className="text-sm text-orange-400">Signup as a Business</p>
            <p className="mb-2 text-3xl font-bold text-white">
              Partner With US
            </p>
            <button className="rounded-2xl bg-orange-500 px-5 py-2 text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCard;

// <div className="relative flex flex-col rounded-[12px] bg-[url('https://picsum.photos/600')] bg-cover bg-center p-8 min-h-[400px]">
//   <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-transparent via-[rgba(3,8,31,0.19)] to-[rgba(3,8,31,0.89)]"></div>
//   <div className="relative -my-8 self-start bg-white p-4 rounded-b-[12px]">
//     <span className="font-medium">Earn more with lower fees</span>
//   </div>
//   <div className="mb-4 self-start mt-auto">
//     <span className="block font-medium text-orange-400">
//       Signup as a business
//     </span>
//     <span className="block text-4xl font-bold text-white">
//       Partner with us
//     </span>
//   </div>
//   <div className="relative flex w-fit self-start rounded-full bg-[#FC8A06] py-2 px-4">
//     <span className="font-bold text-white">Get Started</span>
//   </div>
// </div>
