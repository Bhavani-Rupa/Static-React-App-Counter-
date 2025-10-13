const MainContent = ({ activeTab, onTabChange }) => {
  const [counter, setCounter] = React.useState(0);

  const tabs = [
    { id: 'home', label: 'Home', content: 'Welcome to our React Static App!' },
    { id: 'contact', label: 'Contact', content: 'Get in touch with us through our contact form.' }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <main className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
              <h2 className="h4 fw-semibold mb-4">{currentTab.label}</h2>
              <p className="mb-4">{currentTab.content}</p>
              
              {activeTab === 'home' && (
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-6">
                    <div className="card shadow-lg border-0" style={{minHeight: '400px'}}>
                      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-5">
                        <div className="mb-4">
                          <h3 className="card-title h2 text-primary mb-3"> Counter</h3>
                          <p className="card-text text-muted mb-4">Click the buttons below to interact with the counter</p>
                        </div>
                        
                        <div className="mb-4">
                          <div className="display-1 fw-bold text-primary mb-3" style={{fontSize: '4rem'}}>
                            {counter}
                          </div>
                          <p className="text-muted">Current count</p>
                        </div>
                        
                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                          <button 
                            className="btn btn-outline-danger btn-lg px-4"
                            onClick={() => setCounter(counter - 1)}
                            style={{minWidth: '80px'}}
                          >
                            <i className="bi bi-dash-lg"></i> -
                          </button>
                          <button 
                            className="btn btn-outline-secondary btn-lg px-4"
                            onClick={() => setCounter(0)}
                            style={{minWidth: '100px'}}
                          >
                            <i className="bi bi-arrow-clockwise"></i> Reset
                          </button>
                          <button 
                            className="btn btn-outline-success btn-lg px-4"
                            onClick={() => setCounter(counter + 1)}
                            style={{minWidth: '80px'}}
                          >
                            <i className="bi bi-plus-lg"></i> +
                          </button>
                        </div>
                        
                        <div className="mt-4">
                          <small className="text-muted">
                            Try clicking the buttons to see the counter in action!
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {activeTab === 'contact' && (
                <div className="row">
                  <div className="col-12">
                    <h3>Contact Information</h3>
                    <p>Get in touch with us:</p>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Contact Details</h5>
                        <p className="card-text">
                          <strong>Email:</strong> contact@example.com<br/>
                          <strong>Phone:</strong> (555) 123-4567<br/>
                          <strong>Address:</strong> 123 Web Street, Digital City, DC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MainContent;
}
