export const Responsivite = () =>{
  return(
    <>
      <div className="container mx-auto">
        <div className="bg-blue-500 sm:bg-red-500 md:bg-blue-200 lg:bg-amber-300">
          <p>a ordem de exibição é</p>
          <p>SM (Small) = max-width: 640px</p>
          <p>MD (medium) = max-width: 768px</p>          
          <p>LG (large) = max-width: 1024px</p>
          <p>XL (extra large) = max-width: 1280px</p>
          <p>2XL (extra-extra-large) = max-width: 1536px</p> 
        </div>
      </div>
    </>
  )
}