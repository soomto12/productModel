
export default function ProductModel(){
  return(
   <>
<div className="flex items-center justify-center text-center min-h-screen bg-slate-100  ">
  
<div className=" flex flex-col bg-white p-5 m-3 rounded-2xl shadow-2xl space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:m-0 " >
<div>
  <img src="/headphone.png" className="mx-auto duration-200 w-60 hover:scale-105 "/>
</div>
<div className=" flex flex-col space-y-6">
<div className=" flex flex-col mb-4 space-y-3 text-center md:text-left">
  <div>
    <div className="bg-black inline-block rounded-full px-3 py-1 text-white text-sm ">
      free shipping
    </div>
  </div>
  <div className="max-w-sm text-2xl font-medium">
Razer Kraken kitty Edt Gaming HeadSet Quartz
  </div>
  <div className="flex flex-col mb4 space-y-3 text-center md:text-left">
    <p className="line-through"> $799</p>
<p className="text-5xl font-bold"> $599</p>
<p className="text-sm font-light text-gray-400"> this offer is valid uptil april 3rd or as long stock lasts</p>
  </div>
  <div className="group">
<button className=" w-full border-b-blue-700 text-white rounded-lg border-b-8 bg-blue-700 group-hover:border-t-8 group-hover:shadow-lg ">
  <div className="px-8 bg-blue-500 rounded-lg py-4 hover:bg-blue-600">
Add to Cart
  </div>
</button>
  </div>
  <div className="flex flex-col space-x-3 group  ">
    <div className=" w-3 h-3 bg-green-400 rounded-full hover:animate-ping "> </div>
    <div className="text-sm"> 50+ pcs. in stock</div>
  </div>
  <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
    <button>
      <img src="/weight.png" alt="weightImg" className="w-8"/>
    </button>
    <span> Add to cart</span>
  </div>
</div>
</div>
</div>
</div>

   </>
  )
}