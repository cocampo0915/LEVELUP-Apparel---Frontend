import './Header.css';
import Nav from '../Nav/Nav';

function Header(props) {
    return (
      <header className='header'>
        <div className='brand'>
          <a href='/'>Level Up</a>
        </div>
      <Nav />
      </header>
    );
}

export default Header;