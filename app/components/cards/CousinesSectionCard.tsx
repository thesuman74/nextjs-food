import React from "react";

const CousinesSectionCard = () => {
  const cousines = [
    { id: "1", imagesrc: "/Images/food3.png", title: "Italian" },
    { id: "2", imagesrc: "/Images/food3.png", title: "Indian" },
    { id: "3", imagesrc: "/Images/food3.png", title: "American" },
    { id: "4", imagesrc: "/Images/food3.png", title: "Chinese" },
    { id: "5", imagesrc: "/Images/food3.png", title: "Mexican" },
    { id: "6", imagesrc: "/Images/food3.png", title: "Thai" },
    // { id: "7", imagesrc: "/Images/food3.png", title: "French" },
    // { id: "8", imagesrc: "/Images/food3.png", title: "Japanese" },
    // { id: "9", imagesrc: "/Images/food3.png", title: "Greek" },
    // { id: "10", imagesrc: "/Images/food3.png", title: "Spanish" }
  ];

  return (
    <div className="flex ">
      {cousines.map((item) => (
        <div key={item.id} className="m-4  w-36 overflow-hidden rounded-3xl">
          <img
            src={item.imagesrc}
            alt=""
            className="h-auto w-full object-contain"
          />
          <div className="text-center">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CousinesSectionCard;
