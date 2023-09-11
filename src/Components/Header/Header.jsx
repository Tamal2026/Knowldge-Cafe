import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-around mt-6 border-b-2 items-center pb-4'>
            <h1 className="text-center">Knowdlge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;