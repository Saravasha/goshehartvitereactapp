import useApi from "../../api/useApi";
import Asset from "./Asset";
export default function Gallery() {
  const { assets, directApi } = useApi();

  return (
    <div className="Gallery container mx-auto my-auto border-black bg-red-500 border-4 m-4 grid  ">
      <div className="grid  max-w-screen grid-flow-col ">
        <h1 className=" text-6xl font-thin m-4">Art Gallery</h1>
        <div>
          {assets.map((asset) => (
            <Asset key={asset.id} image={asset} directApi={directApi} />
          ))}
        </div>
      </div>
    </div>
  );
}
