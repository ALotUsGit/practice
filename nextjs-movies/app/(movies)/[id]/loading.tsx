export default function InfoLoading() {
  return (
    <section className="flex flex-col gap-8 max-w-screen-lg mx-auto sm:flex-row animate-pulse">
      <div className="w-full h-60 bg-gray-700 rounded object-cover sm:w-1/4"></div>
      <div className="flex-auto flex flex-col py-2">
        <h2 className="w-full h-8 mb-4 bg-gray-700 rounded"></h2>
        <div className="flex justify-between h-6 mb-2">
          <p className="w-2/6 bg-gray-700 rounded"></p>
          <p className="w-1/6 bg-gray-700 rounded"></p>
        </div>
        <p className="w-full h-24 bg-gray-700 rounded"></p>
        <p className="w-3/6 h-6 mt-4 ml-auto bg-gray-700 rounded sm:mt-auto"></p>
      </div>
    </section>
  );
}
