import React from 'react';

const MOCK_APPS = [
    { id: 1, name: "NodeGlider", category: "DevTools", rating: 4.8, desc: "Visual node manager." },
    { id: 2, name: "CryptoDash", category: "Finance", rating: 4.5, desc: "Real-time crypto portfolio tracker." },
    { id: 3, name: "SecureChat", category: "Social", rating: 4.9, desc: "E2E encrypted messaging app." },
    { id: 4, name: "TaskFlow", category: "Productivity", rating: 4.7, desc: "Kanban board for teams." },
    { id: 5, name: "RenderX", category: "Graphics", rating: 4.6, desc: "Cloud-based rendering engine." },
    { id: 6, name: "MusicStream", category: "Entertainment", rating: 4.4, desc: "Decentralized music streaming." },
];

const Marketplace = () => {
    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <div style={styles.header}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Explore Apps</h1>
                <input
                    type="text"
                    placeholder="Search applications..."
                    style={styles.search}
                />
            </div>

            <div style={styles.grid}>
                {MOCK_APPS.map(app => (
                    <div key={app.id} className="card" style={styles.appCard}>
                        <div style={styles.appIconPlaceholder}>{app.name[0]}</div>
                        <div>
                            <div style={styles.appHeader}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{app.name}</h3>
                                <span style={styles.badge}>{app.category}</span>
                            </div>
                            <p style={styles.desc}>{app.desc}</p>
                            <div style={styles.footer}>
                                <span style={{ color: '#fbbf24' }}>★ {app.rating}</span>
                                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    Install
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    search: {
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        color: 'white',
        padding: '0.75rem 1rem',
        borderRadius: '8px',
        width: '300px',
        outline: 'none',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
    },
    appCard: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'start',
    },
    appIconPlaceholder: {
        width: '48px',
        height: '48px',
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, #4f46e5 100%)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        flexShrink: 0,
    },
    appHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
        width: '100%',
    },
    badge: {
        fontSize: '0.75rem',
        background: 'rgba(255,255,255,0.1)',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
    },
    desc: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginBottom: '1rem',
        lineHeight: '1.4',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
    }
};

export default Marketplace;
