import comingSoon from "../../comingsoonimg2.jpg";
export default function ComingSoon() {
  return (
    <div className="ComingSoonBody relative justify-center flex w-full h-full p-10">
      <img src={comingSoon} className="rounded-full h-auto " alt="ph" />
      {/* <p className="absolute inset-0 italic flex justify-center align-middle text-shadow-rose-200 text-red-50  text-8xl pt-5">
        Gosheh Art
      </p> */}
      {/* <p className="absolute inset-0 italic flex justify-center items-center-safe text-shadow-rose-200 text-red-50  text-4xl">
        Coming soon...
      </p> */}
    </div>
  );
}
