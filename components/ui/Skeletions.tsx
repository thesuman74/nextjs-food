import React from "react";

export function CardSkeleton() {
  const skeletonItems = Array(5).fill(null);

  return (
    <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {skeletonItems.map((_, index) => (
        <div key={index} className="m-3 w-full">
          <div className="max-w-xs animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
            <div className="px-6 py-4">
              <div className="mb-2 h-6 bg-gray-200"></div>
              <div className="h-4 w-2/3 bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WishlistSkeletion() {
  return (
    <>
      <div className="max-w-7xl h-[400px] mx-auto mt-5 rounded-lg bg-gray-200 animate-pulse">
        {/* <!-- Container Skeleton --> */}
      </div>

      <div className="w-96 h-5 bg-gray-200 animate-pulse mx-auto mt-5 ml-3 rounded-lg">
        {/* <!-- Text Skeleton --> */}
      </div>

      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* <!-- Card Skeletons --> */}
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export function HomeSkeletion() {
  return (
    <>
      <div className="max-w-7xl h-[650px] mx-auto mt-5 rounded-lg bg-gray-200 animate-pulse">
        {/* <!-- Container Skeleton --> */}
      </div>

      <div className="w-96 h-5 bg-gray-200 animate-pulse mx-auto mt-5 ml-36 rounded-lg">
        {/* <!-- Text Skeleton --> */}
      </div>

      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* <!-- Card Skeletons --> */}
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
        <div className="m-3 w-full">
          <div className="max-w-md animate-pulse overflow-hidden rounded shadow-lg">
            <div className="h-48 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}
