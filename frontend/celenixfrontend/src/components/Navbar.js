import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>
                    Celenix<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div style={styles.menu}>
                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/marketplace" style={styles.link}>Marketplace</Link>
                    <button className="btn-primary">Login</button>
                </div>

                {/* Mobile Toggle */}
                <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-backdrop)',
        borderBottom: 'var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        letterSpacing: '-0.02em',
    },
    menu: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    link: {
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    mobileToggle: {
        display: 'none', // Hidden on desktop by default in this simple version
        background: 'transparent',
        color: 'white',
        fontSize: '1.5rem',
    }
};

export default Navbar;
