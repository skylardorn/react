function navTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a 
                href="#aboutMe"
                onClick={() => handlePageChange('aboutMe')}
                className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li className="nav-item">
                <a 
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-item">
                <a 
                href="#resume"
                onClick={() => handlePageChange('resume')}
                className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
            <li className="nav-item">
                <a 
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
        </ul>
    )
}
export default navTabs;