import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import poster1 from './assets/poster1.png';
import poster2 from './assets/poster2.png';

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  return (
    <>
      <section style={itemContainer}>
        <div ref={ref} style={item}>
          <figure style={progressIconContainer}>
            <img className="poster-1" src={poster1} />
          </figure>
        </div>
      </section>
      <section style={itemContainer}>
        <div ref={ref} style={item}>
          <figure style={progressIconContainer}>
            <img className="poster-2" src={poster2} />
          </figure>
        </div>
      </section>
    </>
  );
}

export default function TrackElementWithinViewport() {
  return (
    <>
      <Item />
    </>
  );
}

const itemContainer: React.CSSProperties = {
  height: '50%',
  maxHeight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const progressIconContainer: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  width: '100%',
  height: 'auto',
  margin: 0,
  paddingTop: '35vh',
};

const item: React.CSSProperties = {
  width: 200,
  height: '100%',
  position: 'relative',
};
