import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import course from "../../data/db";

const Courses = () => {

    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError('');

        try {
            await logout()
            navigate('/landing');
        } catch {
            setError('Failed to log out');
        }
    }

   async function handleCourseClick(e) {
        e.preventDefault();
        localStorage.setItem('Course', e.currentTarget.querySelector('.course').innerText);
        try {
            navigate('/eachcourse');
        } catch {
            
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
                Courses
            </h1>
            <div className="container flex justify-between flex-wrap flex-1">
                {
                        course.map((data) => {
                            return <div style={{color: "#fff", display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}} key={data.id} onClick={handleCourseClick} className="cursor-pointer mt-10 block p-6 max-w-sm rounded-lg border shadow-md text-black bg-dark hover:bg-green hover:text-white mx-auto h-40">
                            <h2 key={data.id} className="mb-2 text-3xl font-normal tracking-tight course text-center">
                                    {
                                        data.name
                                    }
                                </h2>
                            </div>;
                        })
                    }
            </div>
        </div>

        </div>
    );
}
export default Courses;