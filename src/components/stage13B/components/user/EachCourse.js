import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import course from "../../data/db"
import { useAuth } from "../contexts/AuthContext";

const EachCourse = () => {
    const selectedCourse = localStorage.getItem('Course');
    let courseInfo = course.find(data => data.name.toUpperCase() === selectedCourse.toUpperCase() );
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { logout } = useAuth();

    async function handleLogout() {
        setError('');

        try {
            await logout()
            navigate('/landing');
        } catch {
            setError('Failed to log out');
        }
    }
    return (
        <div className="w-full">
            <aside className={`w-64 absolute ${open ? 'left-0' : '-left-64'} h-screen transition-all duration-200`} aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-green h-full">
                <div className="flex justify-end mb-4">
                    <i onClick={() => setOpen(open => !open)} className="fa-solid fa-xmark text-white cursor-pointer h-6 w-6"></i>
                </div>
                <ul className="space-y-2">
                    <li>
                        <Link to='/' className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-white hover:text-green cursor-pointer">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/courses' className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-white hover:text-green cursor-pointer">
                            <i className="fa-solid fa-chalkboard-user h-6 w-6"></i>
                            <span className="ml-3">Courses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile' className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-white hover:text-green cursor-pointer">
                            <i className="fa-solid fa-user h-6 w-6"></i>
                            <span className="ml-3">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <p
                            onClick={handleLogout}
                            className="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-white hover:text-green cursor-pointer">
                            <i className="fa-solid fa-arrow-right-from-bracket h-6 w-6"></i>
                            <span className="ml-3">Logout</span>
                        </p>
                    </li>
                </ul>
            </div>
        </aside>

        <div className="container pt-4">
                <i onClick={() => setOpen(open => !open)} className="fa-solid fa-bars text-green text-xl md:text-3xl cursor-pointer"></i>
        </div>

        <div className="container">
            {
                error && <p className="text-red-700 text-center text-2xl"> { error } </p>
            }
            <h1 className="text-4xl text-center">
                        Introduction to {
                            courseInfo.name
                        } 
                    </h1>
                    <p className="text-center mt-4">
                        {
                            courseInfo.details.intro
                        }
                    </p>
                    <h2 className="text-2xl text-center mt-2">
                        Branches
                    </h2>
                        {
                            courseInfo.details.branches.map(data => {
                                return <p className="text-center mt-2" key={data}>
                                    {
                                        data
                                    }
                                </p>
                            })
                        }
                    
                </div> 
        </div>

                
    );
}
 
export default EachCourse;