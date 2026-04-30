import { useParams } from "react-router";

const UserDetail = () => {
  const { id } = useParams();
  return <div>UserId: {id}</div>;
};

export default UserDetail;
