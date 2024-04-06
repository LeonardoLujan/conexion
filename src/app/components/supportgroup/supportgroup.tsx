
import BigBlockLeo from "../block/bigblockleo"
import BigBlockGabe from "../block/bigblockgabe"


export default function SupportGroup () {
    return(
        <div className="mt-20 text-black text-4xl">
            <div dir='ltr' className="m-4 font-semibold">
                Take a look at our Support Group
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