import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header  className="p-4 text-white bg-custom-purple">
                <h1 className="text-xl">My Todo App</h1>
            </header>
            <main className="flex-grow p-6">{children}</main>
            <footer  className="p-4 text-white text-center bg-custom-purple">
                &copy; 2025 My Todo App
            </footer>
        </div>
    );
};

export default Layout;
