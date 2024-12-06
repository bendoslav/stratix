import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/logo.png'; // Make sure to add your logo image

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-full md:w-auto"
    >
      <Link 
        to={to}
        onClick={() => setIsOpen(false)}
        className={`relative px-4 py-2 group transition-all duration-300 rounded-xl block text-center
          ${isActive(to) 
            ? 'text-[#e4bc60] bg-[#e4bc60]/10' 
            : 'text-gray-300 hover:text-[#e4bc60] hover:bg-[#e4bc60]/5'
          }`}
      >
        {children}
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] transform origin-left scale-x-0 transition-transform duration-300 rounded-full
            ${isActive(to) ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
        />
      </Link>
    </motion.div>
  );

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }}
      className="fixed top-0 w-[90%] left-[5%] transform -translate-x-1/2 mt-4 z-50 bg-[#282727]/90 backdrop-blur-md border border-[#e4bc60]/10 shadow-lg shadow-black/5 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400
            }}
            className="flex items-center gap-3"
          >
            <motion.img 
              src={logo} 
              alt="StratiX Logo" 
              className="h-10 w-10 object-contain"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <Link to="/" className="text-[#e4bc60] font-bold text-2xl bg-gradient-to-r from-[#e4bc60] to-[#f1d693] bg-clip-text text-transparent hover:tracking-wider transition-all duration-300">
              StratiX
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#e4bc60] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-4 sm:space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/tournaments">Tournaments</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            height: { duration: 0.3, ease: "easeInOut" },
            opacity: { duration: 0.2 }
          }}
          className={`md:hidden overflow-hidden ${isOpen ? 'pb-4' : ''}`}
        >
          <div className="flex flex-col space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/teams", label: "Teams" },
              { to: "/tournaments", label: "Tournaments" },
              { to: "/news", label: "News" },
              { to: "/contact", label: "Contact" }
            ].map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.1 : 0,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <NavLink to={link.to}>{link.label}</NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
