import './App.css';
import flag from './assets/SYMFlag.png';
import logo from './assets/LionLogo.png';
import poster1 from './assets/poster1.png';
import poster2 from './assets/poster2.png';
import ProgressBar from './ProgressBar';
import TrackElementWithinViewport from './Posters';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition > viewportHeight * 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <ProgressBar />
      <div className="root">
        <div
          className={`header-container box ${
            isVisible ? 'root' : 'root-before'
          }`}
        >
          <div>
            <p className="header ">
              <b>
                <i>(H)</i>EGEMONY
              </b>
            </p>
            <p className="subheader">- Culture’s Dominatrix -</p>
            <div className="header-logo">
              <img src={logo} alt="Logo"></img>
            </div>
            <p className="subheader">
              <i>London’s Lost.</i>
              <br /> Isda City of Duppies
              <br />
              Da Rule of Mammon
              <br />
              Da Praise of Pagans
            </p>
          </div>
        </div>
        <div
          className={`subheader-container ${
            isVisible ? 'root' : 'root-before'
          } ${isVisible ? ' hello' : 'goodbye'}`}
        >
          <p className="subsubheader">
            But, we
            <br />
            <i>Working Class London, Got Suttn to Say:</i>
            <br />
            <br />
            <b>Rise like Lions after slumber</b>
            <br />
            In unvanquishable number—
            <br />
            Shake your chains to earth like dew
            <br />
            Which in sleep had fallen on you—
            <br />
          </p>
          <p className="subheader">
            <i>
              <b>Us Man are many—dem man are few.</b>
            </i>
          </p>
        </div>
        <div className="description-container">
          <p className="description">
            The Pagans, Chase Da Bag Jezzies, have ‘ored us out. No auction,
            discarded to the cheapest bidder. London culture is nowa commodity.
            Its dictated to us from above. Real culture should be used to
            challenge not conform. The only thing London culture challenges now,
            is ow low can we go?
            <br />
            True culture is like fungus, it grows in dark, dank places not on
            the polished floors of Soho Aouse. Its word of mout, not sponsored
            on Instagram. It's ard-to-find not igh street.
            <br />
            True radicalism in culture is always suppressed and intentionally
            kept from you. It's not plastered on billboards sponsored by
            Spotify. Culture that grows like fungus is always radical because
            it's a challenge to power from united working-class people, the ones
            who rise from the dark, and tells us not to consume the things they
            tell you to, not to live the life they tell you to, to be angry at
            the things they don't want you to. Ask yourself how we can go from
            form 696 to the playing at the Brits? That's not progress that's
            profit.
            <br />
            I see the London "cultural architects" with paid in partnership
            posts from Spotify and playing gigs at Soho House, making out
            they're the heartbeat of London. They might be the "heartbeat", but
            they're not a healthy heart, they're fatty & flatlining. They're
            only the "heartbeat" because there's no alternative. And that's what
            power wants.
            <br />
            They pedal and contribute to the commodifying of culture. Culture is
            now seen as a vehicle to secure the bag not be rebellious or
            subversive. And this 'securing of the bag' has seen London culture
            shifting away from its pioneering and unique attitudes of constantly
            evolving and making brave, rebellious decisions, for example, on
            clothes to make and how to wear them, or music to make or how to
            play it, that you couldn't find anywhere else in the world, to
            essentially following meaningless trends dictated or supported by
            power as not to lose or upset 'the bag,' that ultimately challenges
            nothing and is virtually the same to what you can find in places
            like Paris, New York or Amsterdam.
          </p>
        </div>
        <div className="title-container">
          <p className="subheader">
            <i>
              <b>Shouldn’t bea crime to be poor in London</b>
            </i>
          </p>
        </div>
        <div className="description-container">
          <p className="description">
            The Pagans, Chase Da Bag Jezzies, have ‘ored us out. No auction,
            discarded to the cheapest bidder. London culture is nowa commodity.
            Its dictated to us from above. Real culture should be used to
            challenge not conform. The only thing London culture challenges now,
            is ow low can we go?
            <br />
            True culture is like fungus, it grows in dark, dank places not on
            the polished floors of Soho Aouse. Its word of mout, not sponsored
            on Instagram. It's ard-to-find not igh street.
            <br />
            True radicalism in culture is always suppressed and intentionally
            kept from you. It's not plastered on billboards sponsored by
            Spotify. Culture that grows like fungus is always radical because
            it's a challenge to power from united working-class people, the ones
            who rise from the dark, and tells us not to consume the things they
            tell you to, not to live the life they tell you to, to be angry at
            the things they don't want you to. Ask yourself how we can go from
            form 696 to the playing at the Brits? That's not progress that's
            profit.
            <br />
            I see the London "cultural architects" with paid in partnership
            posts from Spotify and playing gigs at Soho House, making out
            they're the heartbeat of London. They might be the "heartbeat", but
            they're not a healthy heart, they're fatty & flatlining. They're
            only the "heartbeat" because there's no alternative. And that's what
            power wants.
            <br />
            They pedal and contribute to the commodifying of culture. Culture is
            now seen as a vehicle to secure the bag not be rebellious or
            subversive. And this 'securing of the bag' has seen London culture
            shifting away from its pioneering and unique attitudes of constantly
            evolving and making brave, rebellious decisions, for example, on
            clothes to make and how to wear them, or music to make or how to
            play it, that you couldn't find anywhere else in the world, to
            essentially following meaningless trends dictated or supported by
            power as not to lose or upset 'the bag,' that ultimately challenges
            nothing and is virtually the same to what you can find in places
            like Paris, New York or Amsterdam.
          </p>
        </div>
        <div className="title-container">
          <p className="subheader">
            <i>
              <b>‘this is aint for the culture its for the connoisseur’</b>
            </i>
          </p>
        </div>
        <div className="description-container">
          <p className="description">
            The Pagans, Chase Da Bag Jezzies, have ‘ored us out. No auction,
            discarded to the cheapest bidder. London culture is nowa commodity.
            Its dictated to us from above. Real culture should be used to
            challenge not conform. The only thing London culture challenges now,
            is ow low can we go?
            <br />
            True culture is like fungus, it grows in dark, dank places not on
            the polished floors of Soho Aouse. Its word of mout, not sponsored
            on Instagram. It's ard-to-find not igh street.
            <br />
            True radicalism in culture is always suppressed and intentionally
            kept from you. It's not plastered on billboards sponsored by
            Spotify. Culture that grows like fungus is always radical because
            it's a challenge to power from united working-class people, the ones
            who rise from the dark, and tells us not to consume the things they
            tell you to, not to live the life they tell you to, to be angry at
            the things they don't want you to. Ask yourself how we can go from
            form 696 to the playing at the Brits? That's not progress that's
            profit.
            <br />
            I see the London "cultural architects" with paid in partnership
            posts from Spotify and playing gigs at Soho House, making out
            they're the heartbeat of London. They might be the "heartbeat", but
            they're not a healthy heart, they're fatty & flatlining. They're
            only the "heartbeat" because there's no alternative. And that's what
            power wants.
            <br />
            They pedal and contribute to the commodifying of culture. Culture is
            now seen as a vehicle to secure the bag not be rebellious or
            subversive. And this 'securing of the bag' has seen London culture
            shifting away from its pioneering and unique attitudes of constantly
            evolving and making brave, rebellious decisions, for example, on
            clothes to make and how to wear them, or music to make or how to
            play it, that you couldn't find anywhere else in the world, to
            essentially following meaningless trends dictated or supported by
            power as not to lose or upset 'the bag,' that ultimately challenges
            nothing and is virtually the same to what you can find in places
            like Paris, New York or Amsterdam.
          </p>
        </div>
        <div className="title-container">
          <p className="subheader">
            <i>
              <b>Lun(DUN). But it don’t havta be.</b>
            </i>
          </p>
        </div>
        <div className="description-container">
          <p className="description">
            <b>
              1. WE WANT FREEDOM. WE WANT POWER TO DETERMINE THEDESTINY OF OUR
              BLACK AND OPPRESSED COMMUNITIES.
            </b>
            <br />
            We believe that Black and oppressed people will not be free until we
            are able to determine our destinies in our own communities
            ourselves, by fully controlling all the institutions which exist in
            our communities.
            <br />
            <br />
            <b>2. WE WANT FULL EMPLOYMENT FOR OUR PEOPLE.</b>
            <br />
            We believe that the federal government is responsible and obligated
            to give every person employment or a guaranteed income. We believe
            that if the American businessmen will not give full employment, then
            the technology and means of production should be taken from the
            businessmen and placed in the community so that the people of the
            community can organize and employ all of its people and give a high
            standard of living.
            <br />
            <br />
            <b>
              3. WE WANT AN END TO THE ROBBERY BY THE CAPITALISTS OF OUR BLACK
              AND OPPRESSED COMMUNITIES.
            </b>
            <br />
            We believe that this racist government has robbed us and now we are
            demanding the overdue debt of forty acres and two mules. Forty acres
            and two mules were promised 100 years ago as restitution for slave
            labor and mass murder of Black people. We will accept the payment in
            currency which will be distributed to our many communities. The
            American racist has taken part in the slaughter of our fifty million
            Black people. Therefore, we feel this is a modest demand that we
            make.
            <br />
            <br />
            <b>
              4. WE WANT DECENT HOUSING, FIT FOR THE SHELTER OF HUMAN BEINGS.
            </b>
            <br />
            We believe that if the landlords will not give decent housing to our
            Black and oppressed communities, then housing and the land should be
            made into cooperatives so that the people in our communities, with
            government aid, can build and make decent housing for the people.
            <br />
            <br />
            <b>
              5. WE WANT DECENT EDUCATION FOR OUR PEOPLE THAT EXPOSES THE TRUE
              NATURE OF THIS DECADENT AMERICAN SOCIETY. WE WANT EDUCATION THAT
              TEACHES US OUR TRUE HISTORY AND OUR ROLE IN THE PRESENT-DAY
              SOCIETY.
            </b>
            <br />
            We believe in an educational system that will give to our people a
            knowledge of the self. If you do not have knowledge of yourself and
            your position in the society and in the world, then you will have
            little chance to know anything else.
            <br />
          </p>
        </div>
        <div className="header-container">
          <div className="subdescription-container">
            <p className="subdescription">
              <b>
                <i>
                  Khalas.
                  <br />
                  (H)egemony Magazine
                  <br />7<sup>th</sup> March 2025
                </i>
              </b>
            </p>
          </div>

          <div className="flag-container">
            <img className="flag" src={flag} />
          </div>
        </div>
      </div>

      <div className={`poster-container ${isVisible ? ' hello' : 'goodbye'}`}>
        <TrackElementWithinViewport />
      </div>
    </>
  );
}

export default App;
