import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progressBar"
      style={{ scaleY: scrollYProgress }}
    ></motion.div>
  );
};

export default ProgressBar;
