import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className='nav-links'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/Aranka'>
                    <li>Aranka</li>
                </Link>
                <Link to='Evelyn'>
                    <li>Evelyn</li>
                </Link>
                <Link to='Floris'>
                    <li>Floris</li>
                </Link>
                <Link to='Hector'>
                    <li>Hector</li>
                </Link>
                <Link to='Martina'>
                    <li>Martina</li>
                </Link>
                <Link to='Maurits'>
                    <li>Maurits</li>
                </Link>
                <Link to='Rahima'>
                    <li>Rahima</li>
                </Link>
                <Link to='Sandra'>
                    <li>Sandra</li>
                </Link>
                <Link to='Storm'>
                    <li>Storm</li>
                </Link>
                <Link to='Wietske'>
                    <li>Wietske</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;