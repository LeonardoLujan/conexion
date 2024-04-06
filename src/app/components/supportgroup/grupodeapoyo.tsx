

import BigBlockLeo from "../block/bigblockleo"
import BigBlockGabe from "../block/bigblockgabe"

export default function Grupo() {
    return(
        <div className="mt-20 text-black text-4xl px-5">
            <div dir='ltr' className="m-4 font-semibold">
                Mira nuestro grupo de apoyo
            </div>
            <div className="content-start grid grid-cols-3">
                <div className="mx-4">
                    <BigBlockLeo/>
                </div>
                <div className="mx-4">
                    <BigBlockGabe/>
                </div>
            </div>
            
        </div>
    )
}