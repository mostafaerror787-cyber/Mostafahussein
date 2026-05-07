/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Music2, Share2, ExternalLink, Github, Twitter, MapPin, ShoppingBag, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

const SOCIAL_LINKS = [
  {
    icon: <Music2 className="w-6 h-6" />,
    label: 'TikTok',
    description: 'Creative short-form content',
    url: 'https://www.tiktok.com/@turkey_.x?_r=1&_t=ZS-96ADD6EAt6m',
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    description: 'Official Instagram profile',
    url: 'https://www.instagram.com/turkey_.x/',
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    label: 'Aqareb Shop',
    description: 'Clothing & Lifestyle Store',
    url: 'https://aqareb-zma8.vercel.app/',
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('profile_image') || '/attachments/7901da42-ca32-474c-83b0-4a8b792ff410.png';
  });
  const [showImageInput, setShowImageInput] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState('');

  useEffect(() => {
    localStorage.setItem('profile_image', profileImage);
  }, [profileImage]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateProfileImage = () => {
    if (tempImageUrl.trim()) {
      setProfileImage(tempImageUrl.trim());
      setShowImageInput(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f2f2f2] flex flex-col items-center justify-center p-6 sm:p-16 font-sans select-none overflow-x-hidden relative">
      
      {/* Structural Decor with Optimized Animation */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.015, 0.03, 0.015],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transform-gpu will-change-transform" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.01, 0.02, 0.01],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 transform-gpu will-change-transform" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl relative z-10 flex flex-col min-h-[80vh]"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/10 gap-8">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase text-[10px] letter-spacing-wide text-white/40 mb-3"
            >
              The Digital Archive
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-7xl font-normal font-display italic tracking-tight"
            >
              Mostafa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-white/50 mt-6 max-w-sm font-light leading-relaxed"
            >
              Digital Archive & Content Creator.
            </motion.p>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -10, 0] 
              }}
              transition={{ 
                scale: { delay: 0.4, duration: 0.5 },
                opacity: { delay: 0.4, duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative group"
            >
              <div className="w-24 h-24 rounded-full border border-white/10 p-1.5 shadow-2xl shadow-white/5 cursor-pointer overflow-hidden" onClick={() => setShowImageInput(!showImageInput)}>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] uppercase font-medium tracking-tighter">Edit</span>
                </div>
              </div>

              <AnimatePresence>
                {showImageInput && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-full right-0 mt-4 p-4 glass-effect card-border rounded-xl z-50 w-64 shadow-2xl"
                  >
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[10px] uppercase letter-spacing-wide text-white/40">Upload from device</p>
                          <label className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-xs cursor-pointer transition-colors text-center">
                            Choose File
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setProfileImage(reader.result as string);
                                    setShowImageInput(false);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </label>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <p className="text-[10px] uppercase letter-spacing-wide text-white/40">Or Image URL</p>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={tempImageUrl}
                              onChange={(e) => setTempImageUrl(e.target.value)}
                              placeholder="https://..."
                              className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs flex-1 focus:outline-none focus:border-white/30"
                            />
                            <button 
                              onClick={updateProfileImage}
                              className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-lg text-[10px] uppercase font-bold"
                            >
                              Set
                            </button>
                          </div>
                        </div>
                      </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-white/30 text-[10px] uppercase letter-spacing-wide"
            >
              <MapPin className="w-3 h-3" />
              <span>Cairo, Egypt</span>
            </motion.div>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 flex-grow">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.02)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group card-border glass-effect p-8 flex flex-col justify-between transition-all duration-300 transform-gpu will-change-transform"
            >
              <div>
                <motion.div 
                  className="flex justify-between items-start"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="uppercase text-[9px] letter-spacing-wide text-white/40">{link.label} Content</span>
                  <div className="w-8 h-8 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                </motion.div>
                <h2 className="text-3xl mt-6 font-display font-light italic opacity-90 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </h2>
                <p className="text-xs text-white/40 mt-3 font-light tracking-wide group-hover:text-white/60 transition-colors">
                  {link.description}
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-10">
                <div className="flex-grow h-[1px] bg-white/5 group-hover:bg-white/20 transition-colors"></div>
                <motion.div 
                  className="flex items-center gap-1.5 text-[10px] uppercase letter-spacing-wide text-white/30 group-hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>


        {/* Bottom Bar / Share */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-white/30 text-[10px] uppercase letter-spacing-wide">
            <span>Portfolio 2026</span>
            <button 
              onClick={handleShare}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Share2 className="w-3 h-3" />
              {copied ? 'Link Copied' : 'Share Profile'}
            </button>
          </div>
          
          <div className="flex gap-8 items-center text-white/30 text-[10px] uppercase letter-spacing-wide">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
              <span>Available for Projects</span>
            </div>
            <a href="mailto:contact@mostafa.dev" className="text-white/60 hover:text-white transition-colors">Contact@Mostafa.Dev</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
