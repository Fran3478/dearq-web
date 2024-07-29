const AdminPostItemSkeleton = () => {

    return (
        <div className="flex flex-col h-full m-[1rem] gap-[1rem]">
            <div className="w-full shadow-md flex flex-col bg-white rounded-md p-3 animate-pulse">
                <div className="w-full flex relative">
                    <div className="min-h-[5rem] h-[5rem] min-w-[8rem] w-[8rem] mr-[1.5rem] bg-gray-200"></div>
                    <div className="flex flex-col w-full justify-center">
                        <div className="max-w-[15rem] h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="text-xs absolute right-0" >
                        <div className="p-1 h-4 bg-gray-200 rounded w-[4rem]"></div>
                    </div>
                </div>
            </div>
            <div className="w-full shadow-md flex flex-col bg-white rounded-md p-3 animate-pulse">
                <div className="w-full flex relative">
                    <div className="min-h-[5rem] h-[5rem] min-w-[8rem] w-[8rem] mr-[1.5rem] bg-gray-200"></div>
                    <div className="flex flex-col w-full justify-center">
                        <div className="max-w-[15rem] h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="text-xs absolute right-0" >
                        <div className="p-1 h-4 bg-gray-200 rounded w-[4rem]"></div>
                    </div>
                </div>
            </div>
            <div className="w-full shadow-md flex flex-col bg-white rounded-md p-3 animate-pulse">
                <div className="w-full flex relative">
                    <div className="min-h-[5rem] h-[5rem] min-w-[8rem] w-[8rem] mr-[1.5rem] bg-gray-200"></div>
                    <div className="flex flex-col w-full justify-center">
                        <div className="max-w-[15rem] h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="text-xs absolute right-0" >
                        <div className="p-1 h-4 bg-gray-200 rounded w-[4rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPostItemSkeleton