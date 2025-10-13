const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {currentYear} React Static App. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Footer;
}
