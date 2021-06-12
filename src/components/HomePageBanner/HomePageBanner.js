import './HomePageBanner.css';

function HomePageBanner(props) {
    return (
    <>
        <div className='HomePageBanner'>
            <div className="banner-image-div">
                <img className='banner-image' src="https://miro.medium.com/max/4000/1*U50exbuUOKKHTsmBN4Dqsg.jpeg" alt="banner"></img>
            </div>
            <div className="banner-text-div">
                <h1>Welcome to LEVELUP</h1>
                <h3>Clothing for ultimate comfort and style while on the grind</h3>
            </div>
        </div>
    </>
    );
}

export default HomePageBanner;