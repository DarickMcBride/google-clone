import SearchHeader from "@/components/SearchHeader";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
