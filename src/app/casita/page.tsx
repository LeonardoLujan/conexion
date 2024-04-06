import Forma from "../components/block/form/forma";
import Grupo from "../components/supportgroup/grupodeapoyo";
import Link from 'next/link'
import Switch from "../components/language/switch";

export default function Casita() {
    return (
        <div className="text-black">
          <div className="justify-center flex mt-20 font-bold text-4xl">
            AskTito: Su casa de poder
          </div>
        <div className="justify-center flex ">
          <Switch/>
      </div>
          
          
          <div className="rounded-full justify-center flex mt-20">
            <Forma/>
          </div>
    
          <div className="mt-32 justify-center flex">
            <Grupo/>
          </div>
          
        </div>
    )

}