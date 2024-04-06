"use client"
import Link from "next/link"
import Image from 'next/image'
import LinkedIn from './LinkedIn'

export default function BigBlock() {
    return(
        <div className="flex justify-center">
            <div className="bg-red-500 w-96 h-96 rounded-lg hover:bg-red-600">
                <div dir="rtl" className="m-3 top-0 start-0">
                    <Link href="https://www.linkedin.com/in/leonardolujan/">
                        <button className="h-10 w-10 bg-cyan-400 rounded-lg">
                            <LinkedIn/>
                        
                        

                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}