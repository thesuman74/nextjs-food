import FilterSection from "@/components/filter/FilterSectionCard";
import FilterSeek from "@/components/filter/FilterSeek";
import NavBar from "@/components/ui/NavBar";
import SearchBar from "@/components/ui/SearchBar";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-screen-2xl mx-auto h-full flex space-x-3">
      <div className="min-[900px]:w-1/4 h-screen ">
        <FilterSection  />
      </div>
      <div className=" w-full min-[900px]:w-3/4  mr-10 mt-0  ">
        <div className="container ">
          <SearchBar />
          {children}
        </div>
      </div>
    </main>
  );
}
