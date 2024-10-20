import CardsContainer from "@/components/CardsContainer";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Profile() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
      <div className="flex flex-col items-center mb-12">
        <div className="w-32 h-32 mb-4">
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold">Vaishnavi Patil</h2>
          <div className="flex justify-center">
          <p className="text-gray-400 py-2"><ConnectButton/></p>
          </div>
          <p className="mt-2">NFT Collector | Digital Artist</p>
        </div>
      </div>

      <div className="w-full">
        <CardsContainer />
      </div>
    </div>
  );
}
