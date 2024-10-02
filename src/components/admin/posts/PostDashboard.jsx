import { useEffect } from "react";
import usePrivatePosts from "../../../hooks/usePrivatePosts";
import PostTable from "./PostTable";
import Spinner from "../../spinner/Spinner";

const PostDashboard = () => {
  const { data, getPosts, loading } = usePrivatePosts();

  useEffect(() => {
    if (!data) getPosts();
  }, [data, getPosts]);

  if (loading) return <Spinner />;

  return (
    <div className="h-max w-max pt-6 pl-6">
      <PostTable />
    </div>
  );
};

export default PostDashboard;
