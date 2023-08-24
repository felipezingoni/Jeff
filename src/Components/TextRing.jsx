import React, { useEffect } from 'react';
import '../assets/TextRing.scss';

const TextRing = () => {
  const canTrig = CSS.supports('(top: calc(sin(1) * 1px))');

  const OPTIONS = {
    SPACING: 1,
    SIZE: 1,
    TEXT: '• Zeff Studio • Digital Creator Studio ',
  };

  useEffect(() => {
    const HEADING = document.querySelector('.text-ring');

    const onUpdate = () => {
      // Make the ring text
      const text = OPTIONS.TEXT;
      // 1. Take the text and split it into spans...
      const chars = text.split('');
      HEADING.innerHTML = '';
      HEADING.style.setProperty('--char-count', chars.length);

      for (let c = 0; c < chars.length; c++) {
        HEADING.innerHTML += `<span aria-hidden="true" class="char" style="--char-index: ${c};">${chars[c]}</span>`;
      }
      HEADING.innerHTML += `<span class="sr-only">${OPTIONS.TEXT}</span>`;
      // Set the styles
      HEADING.style.setProperty('--font-size', OPTIONS.SIZE);
      HEADING.style.setProperty('--character-width', OPTIONS.SPACING);
      HEADING.style.setProperty(
        '--radius',
        canTrig
          ? `calc((var(--character-width) / sin(var(--inner-angle))) * -1ch)`
          : `calc((${OPTIONS.SPACING} / ${Math.sin(
            (360 / HEADING.children.length) * (180 / Math.PI)
          )}) * -1ch)`
      );
    };

    onUpdate();
  }, [canTrig]);

  return (
    <div className='text-re'>
      <section className='ring' >
        <h1 className="text-ring"></h1>
      </section>
    </div>
  );
};


export default TextRing;
