import { testimonials } from "../constants";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide px-6">
      {/* Nadpis s animací */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-white"
      >
        Co říkají naši uživatelé:
      </motion.h2>

      {/* Kontejner pro recenze */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }} 
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-lg border border-blue-500 transition transform"
          >
            {/* Citace (Stylizované uvozovky) */}
            <span className="absolute top-4 left-6 text-5xl text-blue-300 font-serif opacity-20">
              “
            </span>

            {/* Text recenze */}
            <p className="text-lg leading-relaxed italic text-blue-200 mb-6">
              {testimonial.text}
            </p>

            {/* Profil uživatele */}
            <div className="flex items-center space-x-4">
              <img
                className="w-14 h-14 rounded-full border-2 border-blue-400 shadow-md"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="text-lg font-semibold text-white">{testimonial.user}</h6>
                <span className="text-sm font-light italic text-blue-300">{testimonial.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
