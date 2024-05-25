import Link from "next/link";
import React from "react";

const PopularCategoriesCard = async () => {
  // const cards = Array(5).fill(null); // Create?s an array with 5 elements

  // const data = [
  //   {
  //     id: "1",
  //     resturant_name: "Chef Burger London",
  //     resturant_location: "Restaurant",
  //     imageLink: "/Images/food1.png",
  //   },
  //   {
  //     id: "2",
  //     resturant_name: "Pizza Palace",
  //     resturant_location: "Restaurant",
  //     imageLink: "/Images/food2.png",
  //   },
  //   {
  //     id: "3",
  //     title: "Sushi World",
  //     resturant_location: "Restaurant",
  //     imageLink: "/Images/food3.png",
  //   },
  // ];

  // fetching data from api
  const res = await fetch(`http://localhost:8000/deals`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log("this is fetched from resturant ", data);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container max-w-7xl mx-auto p-4">
      {data.map(
        (item: {
          id: React.Key | null | undefined;
          title: string | undefined;
          subtitle: string | undefined;
        }) => (
          <Link href={`/deals/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="max-w-xs mt-3 rounded-lg shadow-md mx-auto group"
            >
              <img
                src="/Images/burger.png"
                alt=""
                className="w-full rounded-lg rounded-b-none transition-transform duration-200 group-hover:scale-105"
              />
              <div className="bg-gray-100 p-2 rounded-lg rounded-t-none">
                <span className="ml-5 font-medium">{item.title}</span>
                <p className="text-orange-400 text-sm ml-5">
                  21 {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        )
      )}
    </section>
  );
};

export default PopularCategoriesCard;
