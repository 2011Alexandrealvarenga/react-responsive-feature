export const Test2 = () =>{
  return(
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-1 justify-center bg-amber-300">
        <div className="bg-blue-200 p-2">01</div>
        <div className="bg-blue-200 p-2">02</div>
        <div className="bg-blue-200 p-2">03</div>
        <div className="bg-blue-200 p-2">04</div>
        <div className="col-span-full md:col-span-2 bg-blue-200 p-2">05</div>
        <div className="bg-blue-200 p-2">06</div>
      </div>
    </div>
  );
}