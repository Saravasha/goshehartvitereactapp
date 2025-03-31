import useApi from "../../api/useApi";
import Asset from "./Asset";
export default function Gallery() {
  const { assets, directApi, isLoading } = useApi();

  return (
    <div className="Gallery container mx-auto my-auto border-black bg-red-500 border-4 m-4 grid  ">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" container max-w-screen grid grid-col-3 ">
          <div className="border-black border-2">
            <h1 className=" text-6xl font-thin m-4 mx-auto flex align-center justify-center  ">
              Art Gallery
            </h1>
          </div>
          <div className="gap-4 grid grid-cols-3  p-4">
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
