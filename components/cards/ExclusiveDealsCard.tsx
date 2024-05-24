import Link from "next/link";
import React from "react";

const ExclusiveDealsCard = () => {
  const cards = [
    {
      id: "1",
      title: "Chef Burger London",
      subtitle: "Restaurant",
      imageLink: "/Images/food1.png",
    },
    {
      id: "2",
      title: "Pizza Palace",
      subtitle: "Restaurant",
      imageLink: "/Images/food2.png",
    },
    {
      id: "3",
      title: "Sushi World",
      subtitle: "Restaurant",
      imageLink: "/Images/food3.png",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 container max-w-7xl mx-auto">
      {cards.map((item) => (
        <Link href={`/deals/${item.id}`} key={item.id}>
          <div className="relative max-w-sm overflow-hidden rounded-2xl shadow-lg group h-[250px]">
            <img
              src={item.imageLink}
              alt="image"
              className="transition-transform duration-200 group-hover:scale-110 object-cover w-full h-full"
            />
            <div className="absolute right-10 top-0 flex h-14 w-16 items-center justify-center rounded-b-xl bg-black">
              <p className="text-lg text-white">-40%</p>
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/60 to-transparent">
              <div className="m-5 p-4 text-white">
                <p className="text-sm text-orange-400">{item.subtitle}</p>
                <p className="mb-2 text-lg font-bold">{item.title}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ExclusiveDealsCard;
