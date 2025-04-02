import useApi from "../../api/useApi";
import Asset from "./Asset";
export default function Gallery() {
  const { assets, directApi, isLoading } = useApi();

  return (
    <div className="Gallery border-black bg-red-500 border-1 rounded shadow-lg m-4 grid">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-6xl font-thin m-4 mx-auto flex align-center justify-center border-b-black border-b-4 p-4 ">
            Art Gallery
          </h1>

          <div className="Gallery sm:align-center sm:justify-center gap-4 m-4 p-4 2xl:columns-5 xl:columns-4 lg:columns-3 md:columns-2 sm:columns-1 ">
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
