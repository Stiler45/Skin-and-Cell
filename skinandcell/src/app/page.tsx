import Image from "next/image";
import LaunchingPicture from "../../public/LaunchingPicture.png"

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-[100svh]">
      <div className="flex justify-center items-center w-full h-[100svh]">
        <Image 
            src={LaunchingPicture} 
            alt="LaunchingImage" 
            layout="intrinsic" 
            objectFit="cover"
            className="w-auto max-h-[80vh]"
          />
      </div>
    </main>
  );
}

