async function ApiToUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/apiown/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function ApiPages(content) {
  const data = await ApiToUser(content.params.api_2);
  return (
    <div>
      hehhehe
      {`${data}`}
    </div>
  );
}
