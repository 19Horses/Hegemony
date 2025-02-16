import { useRef } from 'react';
import poster1 from './assets/poster1.png';
import poster2 from './assets/poster2.png';

function Item() {
  const ref = useRef(null);

  return (
    <>
      <section style={itemContainer}>
        <div ref={ref} style={item}>
          <figure style={progressIconContainer}>
            <img className="poster" src={poster1} alt="SYM first poster" />
          </figure>
        </div>
      </section>
      <section style={itemContainer}>
        <div ref={ref} style={item}>
          <figure style={progressIconContainer}>
            <img className="poster" src={poster2} alt="SYM second poster" />
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
