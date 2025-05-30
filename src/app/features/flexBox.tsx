export const Flexbox = () =>{
  return(
    <>
    <div className="container mx-auto">

      <div className="flex gap-2">
        <div className="cell">01</div>
        <div className="cell">02</div>
        <div className="cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>

     <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-center">
        <div className="cell">01</div>
        <div className="cell">02</div>
        <div className="cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>

    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-between">
        <div className="cell">01</div>
        <div className="cell">02</div>
        <div className="cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>
    
    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-around">
        <div className="flex-1 cell">01123</div>
        <div className="cell">02</div>
        <div className="cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex gap-2 justify-around">
        <div className="order-last cell">01</div>
        <div className="cell">02</div>
        <div className="order-first cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row gap-2 justify-around">
        <div className="cell">01</div>
        <div className="cell">02</div>
        <div className="cell">03</div>
        <div className="cell">04</div>
      </div>
    </div>
    </>
  )
}