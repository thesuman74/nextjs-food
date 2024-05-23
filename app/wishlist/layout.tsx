import FilterSection from "../components/filter/FilterSectionCard";
import NavBar from "../components/ui/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar />
        {/* Layout UI */}
        {/* <main>
          <div className="w-1/4   left-0 p-0 m-0">
            <FilterSection />
          </div>
          <div className="w-3/4 ml-auto mr-10 p-0 m-0  ">
            <div className="p-0 m-0"></div>
          </div>
        </main> */}
      </body>
    </html>
  );
}
