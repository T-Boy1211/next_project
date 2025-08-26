export default async function StaticExample() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache"
  });
  const data = await res.json();

  return (
    <div>
      <h1>Static Site Generation</h1>
      <p>{data.title}</p>
    </div>
  );
}
