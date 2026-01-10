function DetailsBar({ data, loading, error }) {
  if (error) {
    return (
      <div className="text-center text-red-500 font-bold">
        Address not found please try again
      </div>
    );
  }
  if (loading) {
    return;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return (
    <div className="bg-white flex flex-col md:flex-row md:items-start gap-2 md:gap-0 py-4 rounded-xl shadow-lg w-2xs md:w-[87%] md:max-w-6xl md:pb-12 absolute text-center md:bottom-[-100px] lg:bottom-[-80px] left-1/2 -translate-x-1/2 md:text-left z-[1000]">
      <div className="flex-1 md:px-6">
        <h1 className="text-light-gray text-xs font-bold">IP ADDRESS</h1>
        <p className="md:text-xl lg:text-2xl font-semibold mt-2">{data.ip}</p>
      </div>
      <Divider />

      <div className="flex-1 md:px-6">
        <h1 className="text-light-gray text-xs font-bold">LOCATION</h1>
        <p className="md:text-xl lg:text-2xl font-semibold mt-2">{`${
          data?.location.city || "N/A"
        }, ${data?.location.region} ${data.location.geonameId}`}</p>
      </div>

      <Divider />

      <div className="flex-1 md:px-6">
        <h1 className="text-light-gray text-xs font-bold">TIMEZONE</h1>
        <p className="md:text-xl lg:text-2xl font-semibold mt-2">
          UTC {data?.location?.timezone || "N/A"}
        </p>
      </div>
      <Divider />

      <div className="flex-1 md:px-6">
        <h1 className="text-light-gray text-xs font-bold">ISP</h1>
        <p className="md:text-xl lg:text-2xl font-semibold mt-2">
          {data?.isp || data?.as?.name || "N/A"}
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="
        hidden md:flex
        items-center
      "
    >
      <div className="h-[6rem] w-[1px] bg-light-gray/50" />
    </div>
  );
}

export default DetailsBar;
