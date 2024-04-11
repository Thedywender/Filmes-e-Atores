import { Link, useLocation } from 'react-router-dom';
import play from '../assets/play.jpeg';
import '../App.css'

const Header = () => {
  const location = useLocation();

  return (
    <div className='header'>
        {location.pathname !== '/atores' && (
          <Link to="/atores" className='header-link'>
            <img src={play} className='header-image'/>
            <p className='header-text'>Atores</p>
          </Link>
        )}
        {location.pathname !== '/' && (
          <Link to="/inicio" className='header-link'>
            <img src={play} className='header-image' />
            <p className='header-text'>Início</p>
          </Link>
        )}
      {location.pathname !== '/filmes' && (
        <Link to="/filmes" className='header-link'>
          <img src={play} className='header-image' />
          <p className='header-text'>Filmes</p>
        </Link>
      )}
    </div>
  );
};

export default Header;