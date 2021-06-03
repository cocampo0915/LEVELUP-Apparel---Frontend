import './Main.css';

function Main(props) {
    return (
    <>
    <aside>Shopping Categories</aside>
    <main className='main'>
        <div className='content'>
        <ul className='products'>
            <li>
                <div className='producst'>
                    <img className='products-image' src="https://www.editsuits.com/wp-content/uploads/2017/01/april_fb-07.jpg" alt="product"></img>
                    <div className='products-name'>
                        <a href="/">Slim Shirt</a> 
                    </div>
                    <div className="products-brand">Nike</div>
                    <div className="price">$60</div>
                    <div className="products-rating">4.5 stars/10 reviews</div>
                </div>
                <div className='producst'>
                    <img className='products-image' src="https://www.editsuits.com/wp-content/uploads/2017/01/april_fb-07.jpg" alt="product"></img>
                    <div className='products-name'>
                        <a href="/">Slim Shirt</a> 
                    </div>
                    <div className="products-brand">Nike</div>
                    <div className="price">$60</div>
                    <div className="products-rating">4.5 stars/10 reviews</div>
                </div>
                <div className='producst'>
                    <img className='products-image' src="https://www.editsuits.com/wp-content/uploads/2017/01/april_fb-07.jpg" alt="product"></img>
                    <div className='products-name'>
                        <a href="/">Slim Shirt</a> 
                    </div>
                    <div className="products-brand">Nike</div>
                    <div className="price">$60</div>
                    <div className="products-rating">4.5 stars/10 reviews</div>
                </div>
                <div className='producst'>
                    <img className='products-image' src="https://www.editsuits.com/wp-content/uploads/2017/01/april_fb-07.jpg" alt="product"></img>
                    <div className='products-name'>
                        <a href="/">Slim Shirt</a> 
                    </div>
                    <div className="products-brand">Nike</div>
                    <div className="price">$60</div>
                    <div className="products-rating">4.5 stars/10 reviews</div>
                </div>
            </li>
        </ul>
        </div>
    </main>
    </>
    );
}

export default Main;