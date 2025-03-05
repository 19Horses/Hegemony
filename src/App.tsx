import { useState } from 'react';
import './App.css';
import logo from './assets/LionLogo.png';
import poster2 from './assets/Sheep.png';
import flag from './assets/SYMFlag.png';
import poster1 from './assets/TekCharge.png';
import { Font } from './Font';
import ProgressBar from './ProgressBar';
import { VideoPlayer } from './VideoPlayer';

function upperCase(str: string) {
  return str.toUpperCase();
}

function App() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Font />
      <ProgressBar />
      {showVideo && <VideoPlayer />}
      <div className="root">
        <div className="header-container">
          <div>
            <p className="title">
              <b>
                <i>(H)</i>EGEMONY MAGAZINE
              </b>
            </p>
            <p className="subtitle">- Culture’s Dominatrix -</p>
          </div>
          <button onClick={() => setShowVideo(true)}>
            <img className="header-logo" src={logo} alt="Logo" />
          </button>
          <p className="intro">
            <b>
              <i>
                London’s Lost.
                <br /> Isda City of Duppies
                <br />
                Da Rule of Mammon
                <br />
                Da Praise of Pagans
              </i>
            </b>
          </p>
        </div>
        <p className="poem">
          But, we
          <br />
          <i>Working Class London, Got Suttn to Say:</i>
        </p>
        <p className="poem">
          <b>Rise like Lions after slumber</b>
          <br />
          In unvanquishable number—
          <br />
          Shake your chains to earth like dew
          <br />
          Which in sleep had fallen on you—
          <br />
          <i>
            <b>Us Man are many—dem man are few.</b>
          </i>
        </p>
        <p className="description first">
          This ain’tda politics of envy. Isa politics of injustice. Dere’s an
          arsenal of distractions, a cabal of cunts, symphonies of fuckery
          blocking our march. Disda battle for control. Control and ownership of
          our lives, our output, even our fun. We’re no longer content with just
          enough. Just enough opportunities, just enough enjoyment, just enough
          Landun in London. Just enough ain’t just no more. Disda fight for our
          aousing, our education, our culture. Disda fight for preservation.
          Disda fight for our forced exodus outa our city. Disda Mandem against
          the Cunts. The Geezas against Inequality.
        </p>
        <p className="description centered">
          <i>Disda City of Duppies.</i>
        </p>
        <p className="description centered" style={{ maxWidth: '500px' }}>
          <i>We’d eaded towar</i> a bleak existence. And it’s gonna get worse
        </p>
        <p className="description">
          The shadows and the screams ‘aunt us. Do they not ‘aunt dem? “When
          hipsters take selfies on the corners where our friends died, the rent
          goes up”. When the elders move on, the eejits move in.{' '}
          <mark>
            Whena gentrifier dances on sacred ground, the bass roars and the
            ground shakes in unified uproar. (more poetic)
          </mark>
          . Our essence: Landun, is under threat.{' '}
          <mark>
            The unspoken rules, the synchronized steps, the taste buds for
            miskeens/ cool...
          </mark>{' '}
          Dear reader, you havta undastand, anyone can bea Londoner, but us.
          We’re Landun. We turned London into Landun. Forced to live behind the
          cladding, the thousand towns, wida thousand tones, anda thousand
          tribes united. The basements and bomb shelters melled a rebel people.
          Da bass and beatings melled a proud people. Our environment formed us.
          The water shaped us. Dere water gives em e.coli. Our water gives us
          the <mark>minerals for defiance</mark>. Dey creased at us, ridiculed
          this essence. But ultimately dey, the people with everyting, yet nuttn
          yearned for this. The Mammon, contorted, screamed looking down at us.
          Anda ting dey ridiculed, our essence, became the object of dere
          deformed desires. Alas, the battle commences.
        </p>
        <p className="description">
          But dey deny this with semantics. Dey distract us wida wails of
          wallads, wid the big battalions of bullies, wid the effigies of
          eejits. Summa us ran wid dis. Widya “foot in the door” orya “speaking
          truth to power.” Leave off. We gotta buss dat door down. Speak truth
          to our people. Dey couldn’t giva monkies boutda truth. Dey fear the
          truth. Dey hava conscious absence in consciousness. Dere teeth glint,
          but smoke covers dere eyes. We paid for those railings, but it’s us
          burning. Dey must think ow can sulphur smell so sweet when our spirit
          ignites.{' '}
          <mark>
            Dere laughs ring out, on the sacred sites of luxury apartments,
            after they pedal lies on the lives lost about the lives longed for.
          </mark>
        </p>
        <p className="description centered">
          Disda battle against da Mammon and dere legion of pagans.
        </p>
        <p className="description">
          ‘You cannot serve both London and Mammon.’ Both your postcode and
          Rightmove. Gentrification is not so slight sleight of hand emptying
          inner cities of their families Whena gentrifier dances on sacred
          ground, the bass roars and the ground shakes in unified uproar. (more
          poetic). The unspoken rules, the synchronized steps, the taste buds
          for Dere laughs ring out, on the sacred sites of luxury apartments,
          after they pedal lies on the lives lost about the lives longed for and
          communities. Schools closing cos there are no kids left, less noise at
          3:30, the mid-afternoon Work from Homerton digital nomad naps can
          continue. A six year-old doesn’t earn three times the rent, but you’d
          think their average management industry brains coming in think
          London’s their playground. Stay a while to tick off the London
          ‘experience’, so you can move to the shires when the deposit’s ready,
          and die without regrets. Can’t pay, we’ll take you away. Alright for
          the other lot to stay, they won’t stick around after all.
        </p>
        <p className="description">
          London’s become a gig economy. Its inhabitants are shift workers,
          scabs breaking picket lines and sit-ins of generations, taking up the
          space for new communities to build with cavalry of temp-Londoners.
          They don’t realise they’ll be the next to get evicted to Peterborough
          in a few months time. But instead of solidarity, ‘the game’s the
          game’.
        </p>
        <p className="description">
          The more you have to promote the London ‘brand’, the more you can be
          sure there’s fuck all underneath it. You flog what you can’t shift.
          Subculture? Subpar. - talk about how the essence is under such brutal
          attack, that it’s a real sacrifice to pursue authentic culture at the
          sacrifice of surviving – whats authenticy when you hava survive.
        </p>
        <p className="subheader">
          <i>
            <b>{upperCase('Shouldn’t bea crime to be poor in London')}</b>
          </i>
        </p>
        <div className="poster-container">
          <img
            className="poster"
            src={poster2}
            alt="Tracksuits and securing the bag Hegemony poster"
          />
          <p className="poster-caption">You 1/4 zip cunts are next.</p>
        </div>
        <p className="description">
          The pagans, Chase Da Bag Jezzies, have ‘ored us out. No auction,
          dashed to the cheapest bidder. London culture is nowa commodity. Its
          dictated to us from above. Real culture, our true essence, should be
          used to challenge not conform. The only thing London culture
          challenges now, is ow low can we go?
        </p>
        <p className="description">
          True culture is like fungus. It grows in dark, dank places not on the
          polished floors of Soho Aouse. Its suppressed and intentionally kept
          from you. Isa challenge to power, which dey fear, from united
          working-class people, the ones who rise from the dark anda dank. Its
          word of mout, not sponsored on Instagram or{' '}
          <mark>plastered on billboards sponsored by Spotify.</mark> It&apos;s
          ard-to-find not igh street.
        </p>
        <p className="description">
          Ask yourself ow we can go from form 696 to the playing at the Brits?
          That&apos;s not progress that&apos;s profit. I seda London
          &quot;cultural architects&quot; with paid in partnership posts and
          playing gigs at Soho House, making out they&apos;re the heartbeat of
          London. They might be the &quot;heartbeat&quot;, but they&apos;re nota
          healthy ‘eart, they&apos;re fatty & flatlining. They&apos;re only the
          &quot;heartbeat&quot; because there&apos;s no alternative. And
          that&apos;s what power wants.
        </p>
        <p className="description">
          Dey pedal a commodified, co-opted mimic of our essence. One dats safe
          and shat out of anyting subversive or orginal or challenging. One that
          shifts with the status quo and interests of da Mammon. We’re now
          consuming not challenging. Anda pagans, ran thru and raw, facilitate
          this. Captured and chained toda “bag” and their guilt eased wit
          semantics ana pretence about “progression.” Dey buy the logic, dey
          believe the lies of da Mammon. Can we blame em? I’ll let you decide.
          With our essence suppressed, and inda void, the pagans are promoted as
          “Landun.” Asda real. Which they ain’t. Dere simplya gimmick chatting
          Mammon wassa wida “Landun” accent. Their chains never allow dem...{' '}
          <mark>
            {' '}
            Their chains never fully allowing us to get close enough to see the
            heterochromia in their eyes. Greed in one and delusion inda uder. Or
            something to do with rotting (to contrast the spirit igniting bar)
          </mark>
        </p>
        <p className="description">
          Wida real suppressed anda pagan promoted, the perception of our
          essence is now lost. da Mammon as made the possibility of having an
          alternative even harder. Wida essence under such brutal attack.
          Because it walks like us, talks like us, its easy to believe it. Its
          easy to believe the perception of essence as this, but it ain’t.
          Culture is now seen as a vehicle to secure the bag not be rebellious
          or subversive. And this &apos;securing of the bag&apos; has seen
          London culture shifting away from its pioneering and unique attitudes
          of constantly evolving and making brave, rebellious decisions, for
          example, on clothes to make and how to wear them, or music to make or
          how to play it, that you couldn&apos;t find anywhere else in the
          world, to essentially following meaningless trends dictated or
          supported by power as not to lose or upset &apos;the bag,&apos; that
          ultimately challenges nothing and is virtually the same to what you
          can find in places like Paris, New York or Amsterdam.
        </p>
        <div className="full-page">
          <p className="full-page-text">
            <i>
              <b>Lun(DUN). But it don’t havta be.</b>
            </i>
          </p>
        </div>
        <div className="poster-container">
          <img
            className="poster"
            src={poster1}
            alt="Tek charge Hegemony poster"
          />
          <p className="poster-caption">
            Please don’t sue us Magnum, TFL gotta case out on me. One luv and
            3me.
          </p>
        </div>
        <p className="subheader">
          <b>{upperCase('Our Demands Are Most Moderate...')}</b>
        </p>
        <p className="description">
          <b>
            <span className="list-number">1.</span> WE WANT FREEDOM. WE WANT
            POWER TO DETERMINE THE DESTINY OF OUR BLACK AND OPPRESSED
            COMMUNITIES.
          </b>
          <br />
          We believe that Black and oppressed people will not be free until we
          are able to determine our destinies in our own communities ourselves,
          by fully controlling all the institutions which exist in our
          communities.
        </p>
        <p className="description">
          <b>
            <span className="list-number">2.</span> WE WANT FULL EMPLOYMENT FOR
            OUR PEOPLE.
          </b>
          <br />
          We believe that the federal government is responsible and obligated to
          give every person employment or a guaranteed income. We believe that
          if the American businessmen will not give full employment, then the
          technology and means of production should be taken from the
          businessmen and placed in the community so that the people of the
          community can organize and employ all of its people and give a high
          standard of living.
        </p>
        <p className="description">
          <b>
            <span className="list-number">3.</span> WE WANT AN END TO THE
            ROBBERY BY THE CAPITALISTS OF OUR BLACK AND OPPRESSED COMMUNITIES.
          </b>
          <br />
          We believe that this racist government has robbed us and now we are
          demanding the overdue debt of forty acres and two mules. Forty acres
          and two mules were promised 100 years ago as restitution for slave
          labor and mass murder of Black people. We will accept the payment in
          currency which will be distributed to our many communities. The
          American racist has taken part in the slaughter of our fifty million
          Black people. Therefore, we feel this is a modest demand that we make.
        </p>
        <p className="description">
          <b>
            <span className="list-number">4.</span> WE WANT DECENT HOUSING, FIT
            FOR THE SHELTER OF HUMAN BEINGS.
          </b>
          <br />
          We believe that if the landlords will not give decent housing to our
          Black and oppressed communities, then housing and the land should be
          made into cooperatives so that the people in our communities, with
          government aid, can build and make decent housing for the people.
        </p>
        <p className="description">
          <b>
            <span className="list-number">5.</span> WE WANT DECENT EDUCATION FOR
            OUR PEOPLE THAT EXPOSES THE TRUE NATURE OF THIS DECADENT AMERICAN
            SOCIETY. WE WANT EDUCATION THAT TEACHES US OUR TRUE HISTORY AND OUR
            ROLE IN THE PRESENT-DAY SOCIETY.
          </b>
          <br />
          We believe in an educational system that will give to our people a
          knowledge of the self. If you do not have knowledge of yourself and
          your position in the society and in the world, then you will have
          little chance to know anything else.
          <br />
        </p>
        <div className="poster-container thin">
          <p className="subheader">
            <b>{upperCase('...Then We Want The Earth')}</b>
          </p>
        </div>
        <footer>
          <p className="footer-note">
            <b>
              <i>
                Khalas.
                <br />
                (H)egemony Magazine
                <br />7<sup>th</sup> March 2025
              </i>
            </b>
          </p>
          <img className="flag" src={flag} alt="SYM logo flag" />
        </footer>
      </div>
    </>
  );
}

export default App;
