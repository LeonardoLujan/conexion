import Image from "next/image";
import Form from "./components/block/form/form";
import SupportGroup from "./components/supportgroup/supportgroup";
import Link from "next/link"
import Switch from "./components/language/switch";

export default function Home() {
  return (
    <div className="text-black">
      <div className="justify-center flex mt-20 font-bold text-4xl">
        AskTito: Hispanic Hub for Empowerment
      </div>
      <div className="justify-center flex ">
        <Switch/>
      </div>
      
      
      <div className="rounded-full justify-center flex mt-20">
        <Form/>
      </div>

      <div className="mt-32 justify-center flex">
        <SupportGroup/>
      </div>


      
    </div>
    
  );
}
