import useColors from "../features/Colors/useColors.jsx";

export default function Header() {
  const headerText = useColors("Header Text") || {};
  return (
    <div className="flex italic  justify-center font-thin ">
      <h1
        className="m-4 p-4 text-shadow-2xl w-full text-center !text-[20vw] hover:text-green-700 hover:animate-pulse drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        style={headerText}
      >
        Gosheh Art
      </h1>
    </div>
  );
}
