import { motion } from 'motion/react';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { CurvedText, Marquee } from './components/TextEffects';

const FLAVORS = [
  {
    id: 1,
    name: "Hazelnut",
    description: "Roasted Piedmont hazelnuts with a touch of sea salt.",
    color: "bg-[#EADDCD]",
    image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Wild Berry",
    description: "A tart and sweet blend of forest berries.",
    color: "bg-[#FBCFE8]",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dark Chocolate",
    description: "70% single-origin cacao for the true connoisseur.",
    color: "bg-[#BAA89D]",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Pistachio",
    description: "Authentic Sicilian pistachios, creamy and nutty.",
    color: "bg-[#D1FAE5]",
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Salted Caramel",
    description: "Rich caramel swirl with a pinch of sea salt.",
    color: "bg-[#FDE68A]",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-purple selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-white">
        <div className="text-2xl font-display tracking-wider">EISLAB.</div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest">
            Locations
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors uppercase text-sm tracking-widest font-medium">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[15vw] leading-[0.8] text-center uppercase text-brand-dark mix-blend-multiply"
          >
            Where Every<br />
            <span className="text-brand-purple">Spoon</span> Is A<br />
            Joyful Journey
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-brand-light to-brand-accent opacity-20 blur-3xl"
          />
        </div>

        {/* Floating Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-[20%] right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl rotate-12 hidden md:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=800&auto=format&fit=crop" 
            alt="Ice cream scoop" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[10%] left-[10%] w-56 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl -rotate-6 hidden md:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=800&auto=format&fit=crop" 
            alt="Ice cream eating" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </header>

      {/* Marquee Section */}
      <div className="bg-brand-purple text-white py-4 rotate-1 scale-105 border-y-4 border-white">
        <Marquee text="HANDCRAFTED • ORGANIC • SUSTAINABLE • DELICIOUS •" className="font-display text-4xl uppercase" />
      </div>

      {/* Intro Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">How ice cream should be today</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-12">
              Our production <span className="text-brand-purple">is</span><br />
              environmentally friendly
            </h2>
            
            <div className="relative h-[60vh] w-full rounded-3xl overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1600&auto=format&fit=crop" 
                alt="Production process" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-brand-dark border-b-[10px] border-b-transparent ml-1"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
           <motion.div 
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row items-center gap-12"
           >
             <div className="md:w-1/2">
                <h2 className="font-display text-7xl uppercase leading-[0.9] mb-8">
                  Every cup is made from <span className="text-brand-purple">high-quality</span> ingredients
                </h2>
                <p className="text-xl text-gray-600 max-w-md">
                  We source our milk from local organic farms and our fruits from the best growers around the world. No artificial flavors, just pure taste.
                </p>
                <button className="mt-8 px-8 py-4 bg-brand-dark text-white rounded-full uppercase tracking-widest hover:bg-brand-purple transition-colors">
                  About Us
                </button>
             </div>
             <div className="md:w-1/2 relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl rotate-12">
                   <img 
                    src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop" 
                    alt="Quality Ingredients" 
                    className="w-full h-full object-cover"
                  />
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Flavors Carousel */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="font-display text-8xl uppercase">Best Choices</h2>
        </div>
        
        <div className="flex overflow-x-auto pb-12 px-4 gap-8 snap-x snap-mandatory no-scrollbar">
          {FLAVORS.map((flavor) => (
            <motion.div 
              key={flavor.id}
              whileHover={{ y: -20 }}
              className={`flex-none w-[85vw] md:w-[400px] snap-center rounded-3xl p-8 ${flavor.color} flex flex-col items-center text-center relative group cursor-pointer`}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 -mt-16 group-hover:scale-110 transition-transform duration-500">
                <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-4xl uppercase mb-2">{flavor.name}</h3>
              <p className="text-gray-800 mb-8">{flavor.description}</p>
              <div className="mt-auto">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations Map Section */}
      <section className="py-32 bg-[#F0F4F8] relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
             <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md">
               <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center text-white font-display text-2xl mb-6">3</div>
               <h2 className="font-display text-5xl uppercase mb-4">Stores in<br/>Germany</h2>
               <p className="text-gray-600 mb-8">Visit us in one of our branches and enjoy your favorite ice cream in a relaxed atmosphere.</p>
               <button className="px-8 py-3 border-2 border-black rounded-full uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                 Find Us
               </button>
             </div>
          </div>
          
          <div className="md:w-1/2 relative h-[600px] w-full">
            {/* Abstract Map Representation */}
            <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-2xl">
              <path 
                d="M150,50 Q250,0 300,100 T350,300 T200,450 T50,300 T150,50" 
                fill="#dbeafe" 
                stroke="#3b82f6" 
                strokeWidth="2"
              />
              {/* Pins */}
              <circle cx="200" cy="200" r="12" fill="#7c3aed" className="animate-pulse" />
              <text x="220" y="205" className="font-display text-2xl fill-brand-dark uppercase" style={{ textShadow: '2px 2px 0px white' }}>Hamburg</text>
              
              <circle cx="250" cy="150" r="12" fill="#7c3aed" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <text x="270" y="155" className="font-display text-2xl fill-brand-dark uppercase" style={{ textShadow: '2px 2px 0px white' }}>Berlin</text>
              
              <circle cx="180" cy="300" r="12" fill="#7c3aed" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <text x="200" y="305" className="font-display text-2xl fill-brand-dark uppercase" style={{ textShadow: '2px 2px 0px white' }}>Munich</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Franchise Section (Outline Text) */}
      <section className="py-32 text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="font-display text-[8vw] leading-none uppercase text-outline-2 hover:text-brand-dark transition-colors duration-700 cursor-default">
            Become A<br/>Franchise Partner
          </h2>
          <p className="mt-8 text-xl max-w-2xl mx-auto text-gray-600">
            Become a franchise partner and offer your customers sustainable enjoyment at the highest level.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 rounded-t-[3rem]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="font-display text-4xl uppercase mb-8">Stay Updated</h3>
              <p className="text-gray-400 mb-8">Subscribe to our newsletter. We won't spam you.</p>
              <form className="flex gap-4 border-b border-white/20 pb-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent w-full focus:outline-none text-xl placeholder:text-gray-600"
                />
                <button type="submit" className="uppercase tracking-widest font-medium hover:text-brand-purple transition-colors">
                  Submit
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between items-end text-right">
               <div className="flex gap-4 mb-8">
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Instagram size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Facebook size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Twitter size={18} /></a>
               </div>
               
               <nav className="flex flex-col gap-2 font-display text-3xl uppercase">
                 <a href="#" className="hover:text-brand-purple transition-colors">Products</a>
                 <a href="#" className="hover:text-brand-purple transition-colors">Locations</a>
                 <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
                 <a href="#" className="hover:text-brand-purple transition-colors">About</a>
               </nav>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-8 border-t border-white/10">
            <p>&copy; 2026 EISLAB. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
