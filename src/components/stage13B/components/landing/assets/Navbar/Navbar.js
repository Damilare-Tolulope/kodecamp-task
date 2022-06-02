import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="mx-auto bg-white">
            <nav className='pt-3 py-4 md:px-10'>
                <div className='flex  justify-between flex-col sm:flex-row'>
                <Link to='/landing' className=" text-black font-black text-sm md:text-4xl pt-2">
                    Rect
                    <span className='text-green'>
                        Study
                    </span>
                </Link>

                    <div className='text-color1 text-lg font-semibold mt-4 md:mt-3'>
                    <Link to='/login' style={{cursor: 'pointer', width: '300px'}} className='bg-green hover:bg-white border-2 border-green hover:text-green text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:rounded-full'>Log In</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;