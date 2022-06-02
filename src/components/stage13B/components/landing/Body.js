import { Link } from "react-router-dom";
import learning from './assets/img/school.png';
const Body = () => {
    return (
        <div className="container mx-auto">
            <div className="container mx-auto flex flex-col justify-between md:flex-row h-full">
                <div className="md:mt-36 mt-20">
                    <h1 style={{color: '#fff'}} className="text-5xl text-black text-center md:text-left">
                        Learn On Your Class Schedule
                    </h1>
                    <p style={{color: '#fff', width:"400px"}} className="mt-3" >Compeletely learn and become a master at your own pace with readily available and adeqaute resources provided for you. Get ready to experience a smooth road learning processes.</p>
                    <div className="mx-auto flex md:justify-start justify-center">
                        <Link to='/login' className="bg-white border-2 inline-block border-green hover:text-green text-black font-bold py-4 px-8 rounded mt-10">
                        Get Started
                        </Link>

                    </div>
                </div>
                <div className="md:mt-10">
                    <img src={learning} alt="students-illustration" className=""/>
                </div>
            </div>
        </div>
    );
}
export default Body;