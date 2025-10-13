const Header = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', disabled: true },
    { id: 'contact', label: 'Contact', disabled: true }
  ];

  return (
    <header className="bg-primary text-white p-4">
      <div className="container">
        <h1 className="display-6 fw-bold">React Static App</h1>
        <nav className="mt-2">
          <ul className="nav">
            {tabs.map(tab => (
              <li className="nav-item" key={tab.id}>
                <button 
                  className={`nav-link text-white ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={tab.disabled ? (e) => e.preventDefault() : () => onTabChange(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Header;
}
