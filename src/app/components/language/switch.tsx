"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function Switch() {

    const path = usePathname()

    return(
        <div>
            {path === "/casita" ?
                (
                    <div className="p-5 border-8 rounded-xl border-solid border-red-300 flex justify-center items-center">
                        <div className="px-2">
                            <Link href="/"> English</Link>
                        </div>
                        
                        <div className="px-2 bg-red-100 rounded-full">
                            Español
                        
                        </div>
                        
                    </div>
                
                ) : (
                    <div className="p-5 border-8 rounded-xl border-solid border-red-300 flex justify-center items-center">
                        <div className="px-2 bg-red-100 rounded-full">
                            English
                        </div>
                        
                        <div className='px-2'>
                        <Link href="/casita"> Español</Link>
                        
                        </div>
                        
                    </div>
                )   

            }
        </div>
    )
}