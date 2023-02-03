import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          I have created some WedSites and Work on some API like News Api ,Movies Api etc. 
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
        <div className="pl-1">
          <div className="image"><img src="" alt="" /></div>
         
        </div>
        <div className="pl-1">2</div>
        <div className="pl-1">3</div>
        <div className="pl-1">4</div>
        <div className="pl-1">5</div>
        <div className="pl-1">6</div>
      </div>
      For More...
    </div>
  );
};

export default ProductList;