import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 p-4 text-white">
                <h1 className="text-xl">My Todo App</h1>
            </header>
            <main className="p-6">{children}</main>
            <footer className="bg-blue-600 p-4 text-white text-center">
                &copy; 2025 My Todo App
            </footer>
        </div>
    );
};

export default Layout;
