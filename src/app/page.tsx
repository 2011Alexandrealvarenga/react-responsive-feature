import { Container } from "./features/container";
import { Testemunials } from "./features/execTestemunials";
import { Test2 } from "./features/exercTest2";
import { Flexbox } from "./features/flexBox";
import { Grid } from "./features/grid";
import { Responsivite } from "./features/responsivite";


export default function Home() {
  return (
    <>
      <Test2 />    
      <hr className="m-2" />
      <Grid />
    </>   
  );
}
