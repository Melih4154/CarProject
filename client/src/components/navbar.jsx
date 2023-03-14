import { useMediaQuery } from '@react-hook/media-query';
import React, { useCallback, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const { user: currentUser } = useSelector((state) => state.auth);
    const size = useMediaQuery('(max-width: 812px)');
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);



    return ( 
        <nav className="w-full bg-slate-600 first-letter: shadow">
            <div className={`px-4 space-x-5 lg:max-w-7xl ${!size && 'items-center flex px-8'} text-white`}>
                <div>
                    <div className={`flex items-center justify-between py-3  ${!size ? 'block' : 'py-5'}`}>
                        <a href="/">
                            <h2 className="text-xl font-semibold">Areta Hasar Danışmanlık</h2>
                        </a>
                        <div className={`${!size ? 'hidden' : 'block'}`}>
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none border-gray-400 border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <AiOutlineClose className='text-lg text-white' />

                                ) : (
                                    <AiOutlineMenu className='text-lg text-white' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={` ${ size ? navbar ? "block" : "hidden" : ""
                            }`}
                    >
                        <ul className={`items-center justify-center  ${!size ? 'flex space-x-6' : 'space-y-1 space-x-0 pb-4'}`} >
                            <li className="text-white hover:text-amber-400">
                                <a href="/">Tüm Dosyalar</a>
                            </li>
                            <li className="text-white hover:text-amber-400">
                                <a href="/">{currentUser.full_name}</a>
                            </li>
                            <li className="text-white hover:text-amber-400">
                                <Link to={"/change-password"}>Şifre Değiştir</Link>
                            </li>
                            <li className="text-white hover:text-amber-400" onClick={logOut}>
                                <span>Çıkış Yap</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar