import React from "react";
import Carou from "../Components/Carou";
import Loptop from "../Components/Loptop";
import Mobile from "../Components/Mobile";
import Tablets from "../Components/Tablets";
import CricleProductUi from "../Components/CricleProductUi";
// import Filter from "../Components/Filter";


//Filter nav and Cart nav
const Home = () => {
  return (
    <>
     
      <Carou />
      <div className="text-center">
        <h1 className=" mt-5 pacifico-regular text-2xl ">List of Products</h1>
        <br />
        <div class="flex justify-center">
          <hr className="w-1/2 border-t-2 border-gray-400" />
        </div>
      </div>
      <br />

      <CricleProductUi/>

      

      <div className="m-3 font-sans ">
        <h1 className="text-2xl flex justify-center">Your Foverte Loptop</h1>
        <br />
        <div className="flex justify-center">
          <Loptop />
        </div>
        <br />

        <h1 className="text-2xl flex justify-center">Your Foverte Smartphones</h1>

        <br />
        <div className="flex justify-center">
          <Mobile />
        </div>
        <br />

        <h1 className="text-2xl flex justify-center">Your Foverte Tablets</h1>

        <br />
        <div className="flex justify-center">
          <Tablets />
        </div>
      </div>
    </>
  );
};

export default Home;
