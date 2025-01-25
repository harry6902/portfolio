
import Link from "next/link";

export function Card({heading,description,gitlink,hostlink,imgUrl}:{
    heading:string,
    description:string,
    gitlink:string,
    hostlink?:string,
    imgUrl:string
}){
    return(
        <div className="min-h-[30vh] w-[80vw] lg:w-[30vw] bg-gray-900 border border-gray-400 p-5 rounded-md relative" >
            <div className="h-full w-full flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl font-bold h-8 mb-2">{heading}</h1>
            <img src={imgUrl} alt="" className="w-[80vw] lg:w-[30vw] h-[28vh] object-cover" />
            <p className="text-xs text-gray-300 text-center font-mono h-16 md:h-12">{description}</p>
            <div className="flex items-center gap-5 mt-2">
            <div className=" bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600 ">
             <Link href={gitlink} className="flex justify-center items-center gap-2" target="_blank">
            <p>Code</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</Link>
</div>

{
    hostlink && <div className=" bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600">
       <Link href={hostlink} className="flex justify-center items-center gap-2" target="_blank">
        <p>View</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</Link>

    </div>
}
            </div>

            </div>
        </div>
    )

}