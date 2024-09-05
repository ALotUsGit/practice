export default function loading() {
  return (
    <div className="grid grid-cols-3 gap-y-8 gap-x-4 md:grid-cols-4 xl:grid-cols-6 animate-pulse">
      <div>
        <div className="h-64 bg-gray-700 rounded-md"></div>
        <h2 className="mt-2 h-6 bg-gray-700 rounded-md"></h2>
        <div className="flex justify-between h-6 mt-2">
          <p className="w-2/6 bg-gray-700 rounded-md"></p>
          <p className="w-1/6 bg-gray-700 rounded-md"></p>
        </div>
      </div>
    </div>
  );
}
