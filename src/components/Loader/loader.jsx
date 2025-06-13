const Loader = () => {
  return (
    <>
      <center className="text-center">
        <h2>The Depolyed Server Is Initially Slow Please Wait </h2>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};
export default Loader;
