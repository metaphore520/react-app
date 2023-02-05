import { useLoaderData } from "react-router-dom";

function Posts({ props }) {
  const contracts = useLoaderData();
  const data = [];
  const getData = () => {
    console.log(props);
    //console.log(params.contactId);
    console.log(contracts);
  };
  return (
    <div>
      <button onClick={getData}>Data</button>
      <h1>This Post Component</h1>
      {contracts.contacts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
export default Posts;
