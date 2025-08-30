const Offline = () => {
  return (
    <div className="bg-cover min-h-screen bg-red-500 flex flex-col justify-center items-center space-y-3">
      <span className="font-bold text-2xl items-center flex">
        <h1 className="text-3xl text-yellow-300 mx-3">⚠</h1>
        Offline
      </span>
      <p>You’re not connected to the internet.</p>
      <p className="font-extralight">Please reconnect to load fresh data.</p>
    </div>
  );
};

export default Offline;
