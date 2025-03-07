import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/LionLogo.png';
import poster2 from './assets/Sheep.png';
import flag from './assets/SYMFlag.png';
import poster1 from './assets/TekCharge.png';
import ProgressBar from './ProgressBar';
import { VideoPlayer } from './VideoPlayer';

function upperCase(str: string) {
  return str.toUpperCase();
}

function App() {
  const [showVideo, setShowVideo] = useState(false);
  function openVideo() {
    setShowVideo(true);
  }

  function closeVideo() {
    setShowVideo(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      'p:not(.title, .subtitle, .intro)'
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  });
  return (
    <>
      {showVideo && <VideoPlayer onEnd={() => closeVideo()} />}
      <div className="root">
        <ProgressBar />
        <div className="header-container">
          <div>
            <p className="title">
              <b>
                <span className="first-letter">
                  <i>(H)</i>
                </span>
                EGEMONY MAGAZINE
              </b>
            </p>
            <p className="subtitle">- Culture’s Dominatrix -</p>
          </div>
          <button onClick={() => openVideo()}>
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
        <p className="poem ">
          But, we
          <br />
          <i>Working Class London, Got Suttn to Say:</i>
        </p>
        <p className="poem ">
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
          our lives, our output, our fun. We’re no longer content with{' '}
          <i>just</i> enough. <i>Just</i> enough opportunities, <i>just</i>{' '}
          enough enjoyment, <i>just</i> enough Landun in London.{' '}
          <i>Just enough</i> ain’t just no more. Disda fight for our aousing,
          our education, our culture. Disda fight for self-preservation. Disda
          fight for our forced exodus outa our city. Disda Mandem against the
          Cunts. The Geezas against Inequality.
        </p>
        <p className="description centered">
          <i>Disda City of Duppies.</i>
        </p>
        <p className="description centered" style={{ maxWidth: '500px' }}>
          <i>
            We’d eaded towar a bleak existence. <br />
            And it’s gonna get worse
          </i>
        </p>
        <p className="description">
          The shadows and the screams ‘aunt us. Do they not ‘aunt dem?{' '}
          <i>
            “When hipsters take selfies on the corners where our friends died,
            the rent goes up”
          </i>
          . When the elders move on, the eejits move in. Whena miskeen missteps
          on sacred ground, the foundations tremble. <i>Landun</i>, our essence,
          is under threat. You see, dere are unspoken rules ere. Ones that
          synchronise steps. You havta understand, dear reader, anyone can bea
          Londoner, but us. <i>We’re Landun</i>. We turned London into{' '}
          <i>Landun</i>. Forced to live behind the cladding, the thousand towns,
          wida thousand tones, anda thousand tribes united. The basements and
          bomb shelters melled a rebel people. Da bass and beatings melled a
          proud people. Our environment formed us. The water shaped us. Dere
          water gives em e.coli. Our water, nutrient rich, gives us the minerals
          for dissent. Dey creased at us, ridiculed this essence. But ultimately
          dey, the people with everyting, yet nuttn, yearned for this. The
          Mammon, contorted, screamed looking down at us. Anda ting dey
          ridiculed, <i>our essence</i>, became the object of dere deformed
          desires. And so, the battle commences.
        </p>
        <p className="description">
          But dey deny this with semantics. Dey distract us wida wails of
          wallads, wid the big battalions of bullies, wid the effigies of
          eejits. Summa us ran wid dis. Widya “foot in the door” orya “speaking
          truth to power.” Leave off. We gotta buss dat door down. Speak truth
          to our people. Dey couldn’t giva monkies boutda truth. Dey fear the
          truth. Dey hava conscious absence in consciousness. Dere teeth glint,
          but smoke covers dere eyes. We paid for those railings, but it’s us
          burning. We breathed in brutality. Asbestos tri clog our spirit. But
          bitter, dey ponder:{' '}
          <i>“how can sulphur smell so sweet when their spirit ignites?”</i>
        </p>
        <p className="description centered">
          Disda battle against da Mammon and dere legion of pagans.
        </p>
        <p className="subheader">
          <i>
            <b>{upperCase('TO FIGHT FORDA DUST OF YOUR LAND IS PUREST. ')}</b>
          </i>
        </p>
        <p className="description">
          We can’t serve both Landun and Mammon. Both our postcode and
          Rightmove. We’re losing our <i>aouses</i>, our <i>people</i>, our
          <i>future</i>. We’re being replaced by <i>Bucket-List Londoners</i>.
          Taking up our space, dey stay ta tick off the “London experience”, so
          dey can move back to the shires when the deposit’s ready and die
          without regrets. Da Mammon rules and decrees:
        </p>
        <p className="description centered">
          <i>
            can’t pay, we’ll take you away. Alright for the other lot to stay.
          </i>
        </p>
        <p className="description">
          Gentrification ain’t so sleighta and, displacing Landuners of our
          ome’s. Mammon sees us as taking up the space to build new conmunities
          forda cavalry of temp-Londoners. Da Mammon’s merceries ravage da
          thousand towns of our families and communities. Dey pillage ends till
          the new builds bury our culture and istory. Dere ona clean up mission.
          Picking up alla our dropped h’s. Schools closing cos there’s no kids
          left. Less noise at 3:30 soda mid-afternoon work-from-Homerton digital
          nomad kips can continue. Monasteries, replaced with monstrosities. Our
          noise now ticketed and dispersed before last orders. The trains finish
          early, asta remind us that only our nostalgia is allowed to remain in
          the city after dark.
        </p>
        <p className="description">
          De Mammon’s desires will turn London into the Empire of Void. De
          Mammon’s postcode will be offshore. The only noise will be building
          work. Dubai-Upon-Thames will rise. It will become the real Thames
          Barrier, the igh rises iding the corruption and greed of the city.
          Everyting will be ona zero-hour contract. Even da trains, overpacked
          and overpriced transporting the cattle of exiled Londoners to work. It
          will become one big food market. Catering to dere bland tastebuds,
          dere devilish appetite for greed and an even igher tolerance for
          mediocrity. The only businesses thriving will be dry cleaners,
          backlogged on pesto stained ¼ zips and baggy filled gilets. Self-help
          gurus, improving everything but dere personalities.
        </p>
        <p className="description">
          Life in London is nowda fight for space. Our essence, under such
          brutal attack, constantly bombarded with fuckery. Dere’s nota corner
          or cadence or creative in Landun which the Mammon’s greed aint got its
          eye on. We’re fighting for space to live, to create, to preserve.
          Simply, we’re fighting for survival. We’re fighting not to be the next
          to get evicted to Peterborough. Landuners born in Landun can no longer
          afford to stay. The Landun Lineage gone.
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
          The <i>pagans</i>, <i>Chase Da Bag Jezzies</i>, have ‘ored us out. As
          London’s become a gig economy, our essence under even greater threat,
          de Mammon demands we become its shift workers. Scabs breaking picket
          lines. De pagans ave dashed us to the cheapest bidder. Landun culture
          is nowa commodity. Its dictated to us from above. Real culture,{' '}
          <i>our true essence</i>, should be used to challenge not conform. The
          only thing London culture challenges now, is ow low can we go?
        </p>
        <p className="description">
          True culture is like fungus. It grows in dark, dank places not on the
          polished floors of Television Centre. It’s suppressed and
          intentionally kept from you. Isa challenge to power, which dey fear,
          from united Working-Class people, the ones who rise from the dark anda
          dank. Its word of mout, not sponsored on Instagram or plastered on
          billboards sponsored by Spotify. It’s ard-to-find not igh street.
        </p>
        <p className="description">
          Ask yourself ow we can go from form 696 to playing at the Brits?
          That’s not progress that’s profit. Da London &quot;cultural
          architects&quot; with paid in partnership posts and playing gigs at
          Soho Aouse, wearing new era caps and air forces, saying ‘hella,”
          making out they’re the “heartbeat” of London. They might be the
          &quot;heartbeat&quot;, but they’re nota ealthy ‘eart, they’re fatty &
          flatlining. They’re only the &quot;heartbeat&quot; because there’s no
          alternative. And that’s what power wants.
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
          and shat out of anyting subversive or original or authentic. One that
          shifts with the status quo and interests of da Mammon. We’re now
          consuming not challenging. Anda pagans, <i>ran thru and raw</i>,
          facilitate this. Captured and chained toda “bag” and dere guilt
          quashed wit semantics ana pretence about “progression.” Dey buy the
          logic, dey believe the lies of da Mammon. Can we blame em? I’ll let
          you decide. With our essence suppressed, inda void, the pagans are
          lauded as “Landun.” Asda real. Which they ain’t. Dere simplya gimmick
          chatting Mammon wassa wida “Landun” accent. We earda flies feasting,
          we sense the vultures circling up above, we smelda stench of
          re-arranged guts, but dere shackles neva allow us to get a propa look
          at dere rotting wounds.
        </p>
        <p className="subheader">
          <i>
            <b>{upperCase('STEP WID LOVE N’ MILITANCE - OR PERISH.')}</b>
          </i>
        </p>
        <p className="description">
          Alas, dear reader, we find ourselves ere. Wid Landun pillaged, our
          essence suppressed anda pagan promoted, the Mammon’s desires are met.
          Bear wid me ere, dear reader. Ima get propa political. The Mammon
          desires Landun for two reasons, to <i>exploit</i> and <i>co-opt</i>{' '}
          our essence.
        </p>
        <p className="description">
          Da ruling class controls us mainly thru fear but also through the
          control of ideas. Da intention ista maintain dere dominance of ideas
          and values over us. The concept of <i>Hegemony</i> describes this.
          Through institutions like media and education these egemonic ideas are
          spread. The idea is to maintain the status quo. Dere brain-washing the
          peoplesdem. The reason why <i>our essence</i> is so sacred, and
          ultimately feared, is because it rejects da Mammon’s egemonic plans
          for us. It promotes Working Class pride, expression and unity. Its
          anti-establishment. <i>Our essence</i>, true London Working Class
          culture, that lines our DNA, is tasted in our grub, forged in our iron
          spirit, promotes the idea that{' '}
          <i>life isn’t meant to be endured, but enjoyed</i>. It promotes the
          idea that <i>injustice for one, is injustice for all</i>. In its
          nature, isa challenge to power. Derefore, de Mammon desires our
          essence, to both profit from it and co-opt it. Establishment
          institutions, media, art and education, are widely distrusted, soda
          ruling class turns its attention to counterculture. It captures/
          co-opts our essence wida intention ta maintain dis control. De mammon
          preys on and ides in the cries of dissent for itself and weaves and
          re-invests itself as suttn appearing to be anti-establishment. It
          works, because it walks and talks like us, its appears like us,
          derefore people trust this mimic. Dey convince people datda mould’s
          breaking. But in actuality it’s the rot multiplying. Dey mistake it as
          being de real essence. But init’s true rotting nature, it promotes the
          ideas of exploitation, individualism and inequality to make dose
          orrors seem natural and inevitable. It encourages people not to
          disrupt de exploitation of our ends or culture, but to join in. Ow
          many cunts ave you eard proclaim <i>“the game’s the game?”</i> Our
          true essence would never accept dis. Dis gimmick of our culture,{' '}
          <i>our essence</i>, which at its truest, is the <i>ecstasy</i> of the
          masses, is distorted to become the <i>opium</i> of the masses.
        </p>
        <div className="full-page">
          <p className="full-page-text">
            <i>
              <b>LUN(DUN). BUT IT DON'T AVTA BE.</b>
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
        <p className="description centered">
          <b>
            <span className="list-number">1.</span>{' '}
            <span className="demands">
              DERE’S ONLY ONE WAR WORTH FIGHTING. <i>CLASS WAR</i>
            </span>
          </b>
          <br />
          No gentrifier or liberal can ever try belittle the class war. Your
          pronouns or watermelon badges can’t disguise your privilege.
          Alternatively, you Reform cunts can’t dare blame immigrants for your
          problems before you blame the rich. The cultural divide and rule is
          intentional. The class war is deliberately quashed. Split people with
          identity politics. Dere’s only 2 identities to remember: Rich & Poor.
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">2.</span>{' '}
            <span className="demands">
              WE DEMANDA END OFDA THEFT OF OUR OMES OUR CULTURE AND OUR LABOUR.
              WE HAVTA PROTECT OUR ESSENCE.
            </span>
          </b>
          <br />
          Mandem/ gyaldem/ dey-dem dem, we havta understand{' '}
          <i>Landun is London</i>. We’re London’s eartbeat. Weather it’s our
          bassline, waistline or production line, we run London. Our culture is
          Britain’s greatest commodity. London does criminal capitalism. Landun
          does culture. We havta protect it from the clutches of Mammon. We
          can’t fling our culture, our essence. Don’t take da soup. Dat means
          fighting for our aousing, culture and growing inequality – dat means
          solidarity.
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">3.</span>{' '}
            <span className="demands">
              WE DEMAND SECURE AOUSING, JOBS, HEALTHCARE AND EDUCATION.
            </span>
          </b>
          <br />
          The crumbling and privatisation of our welfare state is disgusting.
          It’s the only thing we can truly be patriotic about. We demand the
          protection and improvement as absolute priorities.
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">4.</span>{' '}
            <span className="demands">
              WE DEMAND DA VULTURES GET SENT DUBAI.
            </span>
          </b>
          <br />
          If dem developer man love skyscrapers so much, dere's ol desert for
          dem to wreck. leave Landun alone. Your kettle's safer overdere anyway.
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">5.</span>{' '}
            <span className="demands">
              LANDLORDS, TFL TICKET MAN, BALIFFS… PUSSES.
            </span>
          </b>
          <br />
          Absolute cunts. Bottom breed.
          <br />
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">6.</span>{' '}
            <span className="demands">TAXDA RICH.</span>
          </b>
          <br />
          Gidus our P’s back. We aint asking. We’re taking. Nuff said really.
          <br />
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">7.</span>{' '}
            <span className="demands">
              WE DEMAND SPACE TO CREATE AND ENJOY.
            </span>
          </b>
          <br />
          We wana go out-out and not ave our enjoyment mercilessly feasted upon.
          We wana go out-out and not spend score-five entry, £30 a round forda
          dance to finish at 2 and spend more time travelling backa gaff dan we
          do dancing. Additionally, we demand space and opportunities to create
          art. Dere’s only 7% of us man in the arts. Dat means in creative
          spaces the only Working-Class people arda cleaners or security.
          <br />
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">8.</span>{' '}
            <span className="demands">MISS ME WIDYA CONMUNITY.</span>
          </b>
          <br />
          Community. Everyone’s favourite word. Means absolutely fuck all. As if
          your community aint jus coked up posh boys. Aving a butchers at you
          Jumbi.
          <br />
        </p>
        <p className="description centered">
          <b>
            <span className="list-number">9.</span>{' '}
            <span className="demands">
              WE’LL RAISE OUR FISTS BEFORE WE RAISE OUR DRINKS.
            </span>
          </b>
          <br />
          We’re a defiant, victorious people. Dem man will pour libations. Us
          man will pop bottles.
          <br />
        </p>
        <div className="poster-container mt">
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
