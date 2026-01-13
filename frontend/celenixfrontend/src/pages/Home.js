import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={styles.title}>
                        The Next Generation <br />
                        <span className="text-gradient">App Marketplace</span>
                    </h1>
                    <p style={styles.subtitle}>
                        Discover, deploy, and scale decentralized applications with Celenix.
                        The future of software distribution is here.
                    </p>
                    <div style={styles.ctaGroup}>
                        <Link to="/marketplace" className="btn-primary" style={styles.ctaButton}>
                            Explore Apps
                        </Link>
                        <button style={styles.secondaryButton}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container" style={{ padding: '4rem 1rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Why Celenix?</h2>
                <div style={styles.grid}>
                    <FeatureCard
                        title="Decentralized"
                        desc="Built on a robust decentralized network for maximum uptime and censorship resistance."
                    />
                    <FeatureCard
                        title="Secure"
                        desc="End-to-end encryption and verified builds ensure your software is safe and authentic."
                    />
                    <FeatureCard
                        title="High Performance"
                        desc="Optimized delivery networks ensure your apps load instantly anywhere in the globe."
                    />
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ title, desc }) => (
    <div className="card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

const styles = {
    hero: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
    },
    title: {
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: '800',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.6',
    },
    ctaGroup: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
    },
    secondaryButton: {
        background: 'transparent',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: '600',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    }
};

export default Home;
