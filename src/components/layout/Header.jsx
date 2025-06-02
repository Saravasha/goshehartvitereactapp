import useColors from "../../components/features/color/useColors.jsx";

import { useData } from "../../components/api/ApiContext.jsx";

export default function Header() {
  const { colors, isLoading } = useData();
  const colorInStyle = useColors(colors, "Header Text", isLoading) || {};
  return (
    <div className="flex italic  justify-center font-thin ">
      <p
        className="m-4 p-4 text-shadow-2xl text-9xl hover:text-green-700 hover:animate-pulse drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        style={colorInStyle}
      >
        Gosheh Art
      </p>
    </div>
  );
}
