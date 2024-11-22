import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full text-white pt-14 lg:pb-0 flex flex-col lg:min-h-[100vh] h-[100vh] justify-between relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/home-open-boxes.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="boxes"
            className="opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50 z-10"></div>




      </div>
    </>
  );
}
