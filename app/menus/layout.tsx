import FilterContents from "@/components/filter/FilterContents";
import SearchBar from "@/components/ui/SearchBar";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-screen-2xl mx-auto h-full flex space-x-3">
      <div className="hidden  lg:block w-1/4 h-screen ">
        <div className="">
          <FilterContents />
        </div>
      </div>
      <div className=" w-full lg:w-3/4 mr-10 mt-0  ">
        <div className="container ">
          <SearchBar />
          {children}
        </div>
      </div>
    </main>
  );
}
