export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:flex-row sm:space-x-4 flex-col pb-42">
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4">
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
}
