import "./productList.css";
import award from '../../img/award.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductList = () => {
  
  return (
    <div className="c-product">
      <div className="c-bg1"></div>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Projects</h1>
          <p className="pl-desc">
            I have created some WedSites and Work on some API like News Api ,Movies Api etc.
          </p>
        </div>
        
        <div className="pl-list">
        <Carousel showStatus={false} showArrows={false} infiniteLoop interval={1000} autoPlay>
          <div className="pl-1  ">
            <div className="images">
            <div className="image"><img src={award} alt="" /></div>
            <div className="image"><img src={award} alt="" /></div>
            <div className="image"><img src={award} alt="" /></div>
            </div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
           <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
          </div>

          <div className="pl-1 ">
          <div className="image"><img src={award} alt="" /></div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
          <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
          </div>

          <div className="pl-1 "> <div className="image"><img src={award} alt="" /></div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
            <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
            </div>
         
          <div className="pl-1 ">
          <div className="image"><img src={award} alt="" /></div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
             <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
          </div>

          <div className="pl-1 "> <div className="image"><img src={award} alt="" /></div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
             <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
             </div>
         
          <div className="pl-1 ">
          <div className="image"><img src={award} alt="" /></div>
            <p className="decrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias odio eligendi atque illo dolori</p>
             <a href="http://google.com" target='blank'> <button className='btn-primary' >click here</button></a>
          </div>
          </Carousel>
        </div>
       
        <h4>For More...</h4>
      </div>
    </div>
  );
};

export default ProductList;