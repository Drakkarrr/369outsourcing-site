import ErrorNotFound from "@/assets/404.png";

const NotFound = () => {
  return (
    <>
      <main className="h-100 relative overflow-hidden bg-black">
        <center>
          <div className="404 bg-slate-300 py-20">
            <h1 className="text-xs-">Opps!</h1>
            <img src={ErrorNotFound} alt="404 Image" width={300} />
          </div>
        </center>
      </main>
    </>
  );
};

export default NotFound;
