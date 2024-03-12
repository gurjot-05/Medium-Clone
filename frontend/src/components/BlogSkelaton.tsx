
export const BlogSkeleton = () => {
    return (
        <div className="border-b text-slate-200 w-screen pt-2 max-w-screen-sm hover:cursor-pointer">
            <div className="text-sm text-slate-500 p-2">
                <div className="animate-pulse flex items-center">
                    <div className="rounded-full h-8 w-8 bg-gray-300 mr-2"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="text-2xl text-slate-900 font-bold p-2">
                <div className="animate-pulse h-8 bg-gray-300 w-3/4"></div>
            </div>
            <div className="text-lg text-slate-800 px-2">
                <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
                <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6 my-2"></div>
                <div className="animate-pulse h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="text-sm text-slate-500 pt-6 pb-4 px-2">
                <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
        </div>
    );
};

