"use client"
import Link from "next/link"
import Image from 'next/image'
import LinkedIn from './LinkedIn'
import Gabe from "./gabe/PHOTO-2024-04-06-01-09-35.jpg"
import Form from './form/form'
import {usePathname} from 'next/navigation';

export default function BigBlockGabe() {
    const path = usePathname()
    return(
        <div className="flex justify-center">
            <div className="bg-red-500 w-96 h-96 rounded-lg hover:bg-red-600">
                <div dir="rtl" className="m-3 top-0 start-0">
                
                    <Link href="https://www.linkedin.com/in/gabrielpascual4/">
                        <button className="h-10 w-10 bg-cyan-400 rounded-lg">
                            <LinkedIn/>
                        </button>
                    </Link>
                    <div className="justify-center flex text-white font-semibold">
                    Gabriel Pascual
                </div>
                </div>
                

                <div className="justify-center flex">
                    <Image className="rounded-full"
                    src={Gabe}
                    alt="Gabe"
                    width={250}
                    height={250}>

                    </Image>
                    <div className="text-white text-sm">
                        {path === "/casita" ? 
                        (
                            <div>
                                Agarre un internship de Accenture y tenia un ano de experencia trabajando en la industria de ingineria de mechanica
                            </div>

                        ) :
                        (
                            <div>
                                I received an internship with Accenture and I have one year of experience with sales and team management. I am excited to help develop your sales skills if needed
                            </div>
                        )}
                        
                    </div>

                </div>
                

            </div>
        </div>
    )
}