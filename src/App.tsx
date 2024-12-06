import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Teams from './pages/Teams';
import Tournaments from './pages/Tournaments';
import News from './pages/News';
import valorantLogo from './assets/valorant.jpg';
import lolLogo from './assets/lol.jpg';
import cs2Logo from './assets/cs2.png';

// Home page component
const Home = () => {
  return (
    <div>
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#e4bc60] via-[#f1d693] to-[#e4bc60] bg-clip-text text-transparent bg-size-200 animate-gradient"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Welcome to StratiX
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join the ultimate gaming community where strategy meets competition
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(228, 188, 96, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] text-[#282727] rounded-lg font-semibold transition-all duration-300 shadow-lg hover:from-[#f1d693] hover:to-[#e4bc60]"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(228, 188, 96, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#e4bc60] text-[#e4bc60] rounded-lg font-semibold transition-all duration-300 hover:bg-[#e4bc60]/20"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern and Floating Elements */}
      <div className="absolute inset-0 bg-[#282727] opacity-90 z-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: 'radial-gradient(#e4bc60 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Floating Gaming Icons */}
        <motion.div
          className="absolute top-1/4 left-[30%] text-[#e4bc60] opacity-20 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ��
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-[30%] text-[#e4bc60] opacity-20 text-5xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🎲
        </motion.div>

        {/* Game Logos */}
        <motion.div
          className="absolute top-1/2 left-[25%] text-[#e4bc60] opacity-20 text-4xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🚀
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-[35%] text-[#e4bc60] opacity-20 text-4xl"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ⚔️
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-[25%] text-[#e4bc60] opacity-20 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🎯
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-[40%] w-16 h-16 border-2 border-[#e4bc60] opacity-10 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-[40%] w-20 h-20 border-2 border-[#e4bc60] opacity-10"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/2 right-[35%] w-4 h-4 rounded-full bg-[#e4bc60] opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-[35%] w-6 h-6 rounded-full bg-[#e4bc60] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
    <section className="py-24 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#e4bc60] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About StratiX
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Where Strategy Meets Excellence in Competitive Gaming
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-[#282727] p-8 rounded-xl border border-gray-800/50 hover:border-[#e4bc60]/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-[#e4bc60] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e4bc60] mb-3">Elite Performance</h3>
            <p className="text-gray-400">Consistently ranking among top teams globally with our strategic approach and innovative tactics.</p>
          </motion.div>

          <motion.div
            className="bg-[#282727] p-8 rounded-xl border border-gray-800/50 hover:border-[#e4bc60]/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-[#e4bc60] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e4bc60] mb-3">Professional Development</h3>
            <p className="text-gray-400">Dedicated training facilities and expert coaching staff to nurture emerging talent.</p>
          </motion.div>

          <motion.div
            className="bg-[#282727] p-8 rounded-xl border border-gray-800/50 hover:border-[#e4bc60]/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-[#e4bc60] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e4bc60] mb-3">Rich Legacy</h3>
            <p className="text-gray-400">Multiple championship titles and a proven track record of excellence since our founding.</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#282727] via-[#2d2d2d] to-[#282727] p-8 rounded-xl border border-[#e4bc60]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#e4bc60] mb-4">Our Commitment to Excellence</h3>
              <p className="text-gray-400 mb-4">At StratiX, we're more than just an esports team - we're a community of passionate gamers dedicated to pushing the boundaries of competitive gaming.</p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#e4bc60] mr-2">✓</span> State-of-the-art training facilities
                </li>
                <li className="flex items-center">
                  <span className="text-[#e4bc60] mr-2">✓</span> Mental health and wellness programs
                </li>
                <li className="flex items-center">
                  <span className="text-[#e4bc60] mr-2">✓</span> Community engagement initiatives
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e4bc60]/20 to-transparent rounded-xl" />
              <div className="h-64 bg-[#1a1a1a] rounded-xl border border-[#e4bc60]/30" />
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#e4bc60] opacity-20"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
    <section className="py-24 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#e4bc60] mb-12 text-center">
          Our Games
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Valorant Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#ff4655] to-[#ff7784] rounded-xl p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:scale-105">
              <img 
                src={valorantLogo}
                alt="Valorant"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
              />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Valorant</h3>
              <p className="text-white/80 text-sm relative z-10">Currently competing at the highest level</p>
            </div>
          </motion.div>

          {/* League of Legends Card - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#0a1428] to-[#1e3a6e] rounded-xl p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 right-4 bg-[#e4bc60] text-[#282727] px-4 py-2 rounded-full text-sm font-semibold z-20 flex items-center gap-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </div>

              <img 
                src={lolLogo}
                alt="League of Legends"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
              />
              <h3 className="text-2xl font-bold text-gray-200 mb-2 relative z-10">League of Legends</h3>
              <p className="text-gray-300 text-sm relative z-10">Preparing for competitive play</p>
            </div>
          </motion.div>

          {/* CS2 Card - Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#cc5500] to-[#ff8c42] rounded-xl p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 right-4 bg-[#e4bc60] text-[#282727] px-4 py-2 rounded-full text-sm font-semibold z-20 flex items-center gap-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </div>
              <img 
                src={cs2Logo}
                alt="Counter-Strike 2"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
              />
              <h3 className="text-2xl font-bold text-gray-200 mb-2 relative z-10">Counter-Strike 2</h3>
              <p className="text-gray-300 text-sm relative z-10">Building our future team</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#e4bc60] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ready to Join Our Teams?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We're always looking for talented and dedicated players to join our competitive teams. Show us your skills and become part of the StratiX family.
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(228, 188, 96, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] text-[#282727] rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:from-[#f1d693] hover:to-[#e4bc60] flex items-center gap-3 mx-auto"
          >
            <span>Apply Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#282727] font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
