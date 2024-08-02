
const PostDetailSkeleton = () => {

    return(
        <div className="flex flex-col gap-8 w-full animate-pulse">
            <div className="w-[40rem] h-[20rem] m-auto bg-gray-200 rounded"></div>
            <div className="h-12 w-3/4 m-auto bg-gray-200 rounded"></div>
            <div className="mx-24 mt-20">
                <div className="h-6 mb-4 bg-gray-200 rounded w-full"></div>
                <div className="h-6 mb-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-6 mb-4 bg-gray-200 rounded w-4/6"></div>
                <div className="h-6 mb-4 bg-gray-200 rounded w-full"></div>
            </div>
        </div>
    )
}

export default PostDetailSkeleton