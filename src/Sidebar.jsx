import logo from './logo.svg'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';

const Sidebar = () => {
    const { isSidebar, closeSidebar } = useGlobalContext();
    return (
        <aside className={isSidebar ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className='logo' />
                <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
            </div>
            <ul className='links'>
                {links.map((link) => {
                    const { id, text, url, icon } = link
                    return <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                })}
            </ul>
            <ul className='social-links'>
                {social.map((link) => {
                    const { id, url, icon } = link
                    return <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>

                })}
            </ul>
        </aside>
    )
}

export default Sidebar
