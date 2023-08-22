import "../assets/words.scss";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Words = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation logic
    gsap.utils.toArray('.marquee').forEach((el, index) => {
      const w = el.querySelector('.track');
      const [x, xEnd] = index % 2 === 0 ? [-500, -1500] : [-500, 0];

      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: el,  // Change the trigger to the current marquee element
            start: 'center center', // Animation starts when the center of the trigger element reaches the center of the viewport
            end: 'center center', // Animation ends when the center of the trigger element leaves the center of the viewport
            scrub: 1,
            markers:true
          }
        }
      );
    });

    const centerContent = document.getElementById('center-content');
    const centerFold = document.getElementById('center-fold');
    const foldsContent = Array.from(document.querySelectorAll('.fold-content'));

    let targetScroll =
      -(
        document.documentElement.scrollTop || document.body.scrollTop
      );
    let currentScroll = targetScroll;

    const tick = () => {
      const overflowHeight =
        centerContent.clientHeight - centerFold.clientHeight;

      document.body.style.height = `${overflowHeight + window.innerHeight}px`;

      targetScroll =
        -(
          document.documentElement.scrollTop || document.body.scrollTop
        );
      currentScroll += (targetScroll - currentScroll) * 0.1;
      foldsContent.forEach(content => {
        content.style.transform = `translateY(${currentScroll}px)`;
      });
      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <div className='back'>
      <div className="screen " id="fold-effect">
        <div className="wrapper-3d">
          <div className="fold fold-top">
            <div className="fold-align">
              <div className="fold-content">
                <div className="marquee">
                  <div className="track">
                    Creators.Creators.<span className="-focus">Creators.</span>Creators.Creators.Creators.Creators.Creators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Thinkers.Thinkers.<span className="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Innovators.Innovators.<span className="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Rebels.Rebels.Rebels.<span className="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fold fold-center" id="center-fold">
            <div className="fold-align">
              <div className="fold-content" id="center-content">
                <div className="marquee">
                  <div className="track">
                    Creators.Creators.<span className="-focus">Creators.</span>Creators.Creators.Creators.Creators.Creators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Thinkers.Thinkers.<span className="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Innovators.Innovators.<span className="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Rebels.Rebels.Rebels.<span className="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fold fold-bottom">
            <div className="fold-align">
              <div className="fold-content">
                <div className="marquee">
                  <div className="track">
                    Creators.Creators.<span className="-focus">Creators.</span>Creators.Creators.Creators.Creators.Creators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Thinkers.Thinkers.<span className="-focus">Thinkers.</span>Thinkers.Thinkers.Thinkers.Thinkers.Thinkers.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Innovators.Innovators.<span className="-focus">Innovators.</span>Innovators.Innovators.Innovators.Innovators.Innovators.
                  </div>
                </div>

                <div className="marquee">
                  <div className="track">
                    Rebels.Rebels.Rebels.<span className="-focus">Rebels.</span>Rebels.Rebels.Rebels.Rebels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Words;
