import TextBox from "../../textbox"
import Link from "next/link"

export default function Form() {
    return(
        <div className="">
            <form className="max-w-sm bg-white rounded-full bg-slate-100">
                <div className="flex justify-center p-3">
                    <input className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="How can I help you?" aria-label="Full name"/>
                        <Link href="./help">
                            <button className="flex-shrink-0 border-transparent border-4 text-red-500 hover:text-red-800 text-sm py-1 px-2 rounded" type="button">
                                Submit
                            </button>
                        </Link>
                           
                </div>
            </form>
        </div>
    )
}