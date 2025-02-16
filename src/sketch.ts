import p5, { Image } from 'p5';

export const sketch = (p5: p5, container?: React.RefObject<HTMLDivElement>) => {
  const posters: { img: Image; h: number }[] = [];
  let scrollOffset = 0;

  p5.preload = () => {
    for (let i = 0; i < 6; i++) {
      const index = (i % 2) + 1;
      posters.push({
        img: p5.loadImage(`src/assets/poster${index}.png`),
        h: 0,
      });
    }
  };

  p5.setup = () => {
    if (container?.current?.clientHeight)
      p5.createCanvas(innerWidth * 0.15, container?.current?.clientHeight);
  };

  function getPreviousHeightSums(index: number) {
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += posters[i].h;
    }
    return sum;
  }

  p5.draw = () => {
    p5.background(220);

    const middleY = p5.height / 2;
    posters.forEach((poster, index) => {
      const img = poster.img;
      const heightsOfPrevious = getPreviousHeightSums(index);
      const h = poster.img.height / 6;
      const w = p5.width;
      const y = heightsOfPrevious + scrollOffset;
      const stretchFactor = p5.map(
        p5.abs(y - middleY),
        0,
        middleY,
        1,
        0.2,
        true
      );
      const newH = h * stretchFactor * 3;

      const x = p5.width - w;
      const newY = p5.constrain(heightsOfPrevious + scrollOffset, 0, p5.height);
      p5.image(img, x, newY, w, newH);
      poster.h = newH;
    });
  };

  p5.mouseWheel = (event: { delta: number }) => {
    scrollOffset -= event.delta * 0.1;
  };
};
