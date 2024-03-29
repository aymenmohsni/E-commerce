import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="displaydisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    DT {product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    DT {product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum provident magnam nam vel voluptatum doloremque reiciendis earum sequi dignissimos. Dolor minima obcaecati hic ipsa, molestiae est totam repudiandae reprehenderit.
            </div>
            <div className="productdisplay-right-scent">
                <h1>Select size</h1>
                <div className="productdisplay-right-scents">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>AJOUTER AU PANIER</button>
            <p className='productdisplay-right-category'><span>Categorie : </span> Women, Tshirt, </p>
            <p className='productdisplay-right-category'><span>Tags : </span> modern, latest, </p>
        </div>
    </div>
  )
}

export default ProductDisplay