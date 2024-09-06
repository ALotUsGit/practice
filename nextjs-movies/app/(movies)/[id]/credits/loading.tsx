export default function CreditsLoading() {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-1/3 aspect-square bg-gray-700 rounded-md"></div>
        <p className="flex-auto flex flex-col gap-2 text-sm break-all">
          <span className="h-4 bg-gray-700 rounded"></span>
          <span className="h-4 bg-gray-700 rounded"></span>
        </p>
      </div>
    </section>
  );
}
