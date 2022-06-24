import useUserContext from "../hooks/useUserContext";

const AllData = () => {
  const { user } = useUserContext();
  return (
    <>
      <h1>AllData</h1>
      <br />
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default AllData;
