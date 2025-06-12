
export default function ProductModel(){
  return(
    <div>
      <div className=" flex justify-center items-center min-h-screen bg-slate-100 ">
        <div 
        className="flex flex-col m-3 space-y-10 bg-white shadow-2xl md:flex-row md:space-y-0 md:space-x-10 rounded-2xl p-6 md:p-16 md:m-o "> 
 <div>
            <img src="/headphone.png" className=" duration-200 hover:scale-150 w-50 rounded-2xl"/>
          </div >
          <div className="flex flex-col space-y-6">
          <div className="flex flex-col text-center mb-4 space-y-3 md:text-left  ">
            <div className="inline-block px-3 text-white  bg-black rounded-full py-1 text-xs  text-center">
              free shipping
            </div>
          </div>
          </div>
         </div>
      </div>
    </div>
  )
}