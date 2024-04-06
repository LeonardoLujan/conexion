"use client"
import Link from "next/link"
import Image from 'next/image'
import LinkedIn from './LinkedIn'
import Leo from "./leo/Headshot.png"
import Form from './form/form'
import {usePathname} from 'next/navigation';

export default function BigBlockLeo() {
    const path = usePathname()
    return(
        <div className="flex justify-center">
            <div className="bg-red-500 w-96 h-96 rounded-lg hover:bg-red-600">
                <div dir="rtl" className="m-3 top-0 start-0">
                    <Link href="https://www.linkedin.com/in/leonardolujan/">
                        <button className="h-10 w-10 bg-cyan-400 rounded-lg">
                            <LinkedIn/>
                        </button>
                    </Link>
                    <div className="justify-center flex text-white font-semibold">
                    Leonardo Lujan
                </div>
                </div>
                

                <div className="justify-center flex">
                    <Image className="rounded-full"
                    src={Leo}
                    alt="Leo"
                    width={300}
                    height={300}>

                    </Image>
                    <div className="text-white text-sm">
                        
                        {path === "/casita" ? 
                        (
                            <div>
                                Agarre un internship de yohnson y yohnson por el SHPE confernence, te ayudo con resume critiques, practica de entrevista y todo lo q quieres
                            </div>

                        ) :
                        (
                            <div>
                                I received an internship with Johnson and Johnson through the SHPE conference, I can help with resume critiques, interview practice and all that you may need
                            </div>
                        )}
                    </div>

                </div>
                

            </div>
        </div>
    )
}