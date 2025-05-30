export const Grid = () =>{
  return(
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <div className="cell col-span-full">01</div>
          <div className="cell col-span-2">02</div>
          <div className="cell">03</div>
          <div className="cell">04</div>
          <div className="cell col-start-2 col-end-4">05</div>
          <div className="cell row-start-2">06</div>
          <div className="cell col-span-3">07</div>
          <div className="cell">08</div>
          <div className="cell">09</div>
        </div>
      </div>
    </>
  );
}