import { useState, useRef, MouseEvent as ReactMouseEvent } from "react";
import { Link } from "react-router-dom";

export const AvatarComponent = ({ name }: { name: string }) => {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleAvatarClick = () => {
        setShow(true);
    };

    const handleClickOutside = (event: ReactMouseEvent | MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        setShow(false);
    };

    return (
        <div>
            <div
                className="relative inline-flex items-center cursor-pointer justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full"
                onClick={handleAvatarClick}
            >
                <span className="font-semibold text-slate-900">{name[0].toUpperCase()}</span>
            </div>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-25" onClick={handleClickOutside}></div>
                    <div ref={modalRef} className="z-50 max-w-sm bg-white shadow-md rounded-md overflow-hidden">
                        <div className="p-6">
                            <div className="text-xl font-semibold text-center text-gray-800">Sad to see you go</div>
                            <button
                                onClick={handleLogoutClick}
                                className="block mx-auto mt-4 px-4 py-2 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-900"
                            >
                                <Link to={`/`}>
                                    Logout
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
