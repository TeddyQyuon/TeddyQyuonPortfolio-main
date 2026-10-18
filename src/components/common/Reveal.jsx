import { motion } from 'framer-motion';

/**
 * Reveal — Scroll-triggered fade-up animation wrapper
 * Wraps any component to animate it into view when scrolled to
 */
export function Reveal({ children, delay = 0, y = 24, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container variant — Use with motion.div for list animations
 * Example: <motion.div variants={stagger} initial="hidden" whileInView="show">
 */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

/**
 * FadeUp item variant — Individual item animation inside stagger container
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

/**
 * Scale on hover variant — For interactive cards and buttons
 */
export const hoverScale = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

/**
 * Lift on hover variant — Smooth Y-axis lift for cards
 */
export const hoverLift = {
  y: -6,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};
