import React, { useEffect, useState } from 'react';
import './ProductScreen.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../../actions/productActions';

function ProductScreen(props) {
  
  const [ qty, setQty ] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [])

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  }

  return (
        <>
        <div className="back-to-result">
      <Link to="/"> &#8592; Back to result</Link>
    </div>
    { loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
      (
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt="product" ></img>
      </div>
      <div className="details-right">
        <div className="details-info">
        <ul>
          <li>
            <h2>{product.name}</h2>
          </li>
          <li>
            {/* {product.rating}  */}
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span> Stars 
            ({product.numReviews} Reviews)
          </li>

          <li>
            <b>Description:</b>
            <br /> 
            <div className="details-description">
              {product.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            <b>Price:</b> ${product.price}
          </li>
          <li>
            <b>Status:</b> {product.countInStock > 0 ? "In Stock" : "Unavailable"}
          </li>
          <li>
            <b>Qty:</b> <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
              {[...Array(product.countInStock).keys()].map(x => 
                <option key={x + 1} value={x + 1}>{x + 1}</option>  
              )}
            </select>
          </li>
          <li>
            {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary" >Add to Cart</button> 
            }
          </li>
        </ul>
      </div>
      </div>
      

    </div>

      )
    }
        </> 
    )

}

export default ProductScreen;