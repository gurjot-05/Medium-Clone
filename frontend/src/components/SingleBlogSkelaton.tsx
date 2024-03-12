export const SingleBlogSkeleton = () => {
  return (
    <div className="grid grid-cols-10 pt-10">
      <div className="col-span-10 lg:col-span-7 flex justify-center lg:justify-start px-24">
        <div>
          <div className="text-3xl font-extrabold bg-gray-300 h-10 w-64 mb-4 animate-pulse"></div>
          <div className="pt-2 text-slate-500 bg-gray-200 h-6 w-40 animate-pulse"></div>
          <div className="pt-2 text-slate-700 bg-gray-200 h-20 w-96 animate-pulse"></div>
        </div>
      </div>
      <div className="lg:col-span-3 invisible lg:visible">
        <div className="text-slate-950 font-semibold pb-4 bg-gray-200 h-6 w-24 animate-pulse"></div>
        <div className="flex items-center pt-4">
          <div className="rounded-full h-8 w-8 bg-gray-300 mr-2 animate-pulse"></div>
          <div className="pl-2 text-2xl font-bold bg-gray-200 h-6 w-40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
