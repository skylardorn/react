import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import aboutMe from './pages/aboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import resume from "./pages/resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;

        } if (currentPage === 'aboutMe') {
            return <aboutMe />;

        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'resume') {
            return <resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
        </div>
      );
    }

