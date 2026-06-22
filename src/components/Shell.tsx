import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Header from './Header';
import Footer from './Footer';

export default function Shell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#fcfdfc] font-sans antialiased flex flex-col justify-between selection:bg-forest-100 selection:text-forest-900">
      <Header />

      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
