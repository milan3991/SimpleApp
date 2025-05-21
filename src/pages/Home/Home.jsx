import homeimg from '../../assets/homeimg.png';
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import { useNavigate } from 'react-router-dom';
import '../Home/home.style.css';



const Home = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/');
    };


    return (
            <div className='home_wrapper'>
                <div className='homesection'>
                    <div className='homesection_left'>
                    <img src={homeimg} alt="My profile image" className="home_image" />
                    </div>
                    <div className='homepagesection_right'>
                        <div className='homesection_heading'>
                        <h1>We are learning React</h1>
                        </div>
                        <p className='sectiononeparagraf'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore tempore suscipit. 
                        </p>
                        <GlobalButton text="Click here" handleClick={handleButton} className='global_button' />
                    </div>
                </div>
            </div>
    );
};

export default Home;
