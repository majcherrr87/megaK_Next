type RouteProps = {
  params: Promise<{ slag: string; id: string }>;
};

const Post = async ({ params }: RouteProps) => {
  const { slag, id } = await params;
  return (
    <>
      <h3>
        Read more about {slag} {id}
      </h3>
    </>
  );
};

export default Post;
