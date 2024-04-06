import Image from "next/image";
import TextBox from "./components/textbox";
import BigBlock from "./components/block/bigblock";

export default function Home() {
  return (
    <div className="text-black">
      <div className="justify-center flex mt-10 font-bold text-4xl">
        AskTito: Hispanic Hub for Empowerment
      </div>
      
      <div>
        <TextBox/>
      </div>
      <div>
        <BigBlock/>
      </div>
      
    </div>
    
  );
}
