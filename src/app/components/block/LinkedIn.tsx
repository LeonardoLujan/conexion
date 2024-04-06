import Image from 'next/image'
import Photo from './NewLinkedin.jpg'

export default function LinkedIn() {
    return(
        <div className="flex justify-center rounded-full">
            <Image 
            src={Photo}
            alt="linked/>"/>

        </div>
    )
}