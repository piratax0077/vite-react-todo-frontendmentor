import MoonIcon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className='container mx-auto pt-8 px-4'>
            <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
            <button><MoonIcon fill="#fff" /></button>
            </div>
        </header> 
        );
    };
export default Header;