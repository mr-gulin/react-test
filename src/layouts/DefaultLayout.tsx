import { Link, Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Link to={'/'}>Home</Link>
                <Link to={'register'}>Register</Link>
            </header>
            <Outlet />
        </>
    );
};

export default DefaultLayout;
