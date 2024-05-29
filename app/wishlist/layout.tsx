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
    <main className="max-w-screen-2xl mx-auto h-full flex ">
      <div className="w-1/4 h-screen left-0 p-0 m-0  ">
        <FilterSection />
        {/* <FilterSeek /> */}
      </div>
      <div className="w-3/4  mr-10 mt-0  ">
        <SearchBar />

        {children}
      </div>
    </main>
  );
}
