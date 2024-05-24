import React from "react";
const CousinesSectionCard = () => {
  const cuisines = [
    { id: "1", imagesrc: "/Images/food3.png", title: "Italian" },
    { id: "2", imagesrc: "/Images/food3.png", title: "Indian" },
    { id: "3", imagesrc: "/Images/food3.png", title: "American" },
    { id: "4", imagesrc: "/Images/food3.png", title: "Chinese" },
    { id: "5", imagesrc: "/Images/food3.png", title: "Mexican" },
    { id: "6", imagesrc: "/Images/food3.png", title: "Thai" },
    { id: "7", imagesrc: "/Images/food3.png", title: "French" },
    { id: "8", imagesrc: "/Images/food3.png", title: "Japanese" },
    { id: "9", imagesrc: "/Images/food3.png", title: "Greek" },
    { id: "10", imagesrc: "/Images/food3.png", title: "Spanish" },
  ];

  return (
    <div className="mt-4 flex flex-col ">
      <div className="hide-scroll-bar flex overflow-x-scroll">
        <div className="flex flex-nowrap">
          {cuisines.map((item) => (
            <div key={item.id} className="inline-block px-2">
              <div className="m-4  w-36 overflow-hidden rounded-3xl  bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <img src={item.imagesrc} alt={item.title} className="w-full" />
                <div className="text-center">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CousinesSectionCard;
