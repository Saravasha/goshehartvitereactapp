import useApi from "../../api/useApi";
import Asset from "./Asset";
export default function Gallery() {
  const { assets, directApi, isLoading } = useApi();

  return (
    <div className="Gallery   border-black bg-red-500 border-1 rounded shadow-lg m-4 grid  ">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="  max-w-screen grid grid-col-3 ">
          <div className="border-black border-2">
            <h1 className=" text-6xl font-thin m-4 mx-auto flex align-center justify-center  ">
              Art Gallery
            </h1>
          </div>

          {/* xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 */}
          <div className="Gallery gap-4 grid p-4 columns-auto row-auto ">
            {assets.map((asset) => (
              <Asset
                key={asset.id}
                image={asset}
                categories={asset.categories}
                directApi={directApi}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
