export const Flexbox = () =>{
  return(
    <>
    <div className="container mx-auto">

      <div className="flex gap-2">
        <div className="bg-blue-500 text-white p-4">01</div>
        <div className="bg-blue-500 text-white p-4">02</div>
        <div className="bg-blue-500 text-white p-4">03</div>
        <div className="bg-blue-500 text-white p-4">04</div>
      </div>
    </div>

     <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-center">
        <div className="bg-red-500 text-white p-4">01</div>
        <div className="bg-red-500 text-white p-4">02</div>
        <div className="bg-red-500 text-white p-4">03</div>
        <div className="bg-red-500 text-white p-4">04</div>
      </div>
    </div>

    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-between">
        <div className="bg-red-500 text-white p-4">01</div>
        <div className="bg-red-500 text-white p-4">02</div>
        <div className="bg-red-500 text-white p-4">03</div>
        <div className="bg-red-500 text-white p-4">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-around">
        <div className="bg-red-500 text-white p-4">01</div>
        <div className="bg-red-500 text-white p-4">02</div>
        <div className="bg-red-500 text-white p-4">03</div>
        <div className="bg-red-500 text-white p-4">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-around">
        <div className="flex-1 bg-green-500 text-white p-4">01</div>
        <div className="bg-green-500 text-white p-4">02</div>
        <div className="bg-green-500 text-white p-4">03</div>
        <div className="bg-green-500 text-white p-4">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-around">
        <div className="order-last bg-yellow-500 text-white p-4">01</div>
        <div className="bg-green-500 text-white p-4">02</div>
        <div className="order-first bg-blue-500 text-white p-4">03</div>
        <div className="bg-green-500 text-white p-4">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row gap-2 justify-around">
        <div className="bg-red-500 text-white p-4">01</div>
        <div className="bg-red-500 text-white p-4">02</div>
        <div className="bg-red-500 text-white p-4">03</div>
        <div className="bg-red-500 text-white p-4">04</div>
      </div>
    </div>
    </>
  )
}