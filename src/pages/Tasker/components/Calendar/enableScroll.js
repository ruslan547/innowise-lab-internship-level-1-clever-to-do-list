const INITIAL_SCALE = 0;

const enableScroll = (event, target) => {
  const toLeft = event.deltaY < INITIAL_SCALE && target.scrollLeft > INITIAL_SCALE;
  const hiddenWidth = target.scrollWidth - target.clientWidth;
  const toRight = event.deltaY > INITIAL_SCALE && target.scrollLeft < hiddenWidth;

  if (toLeft || toRight) {
    event.preventDefault();
    target.scrollLeft += event.deltaY;
  }
};

export default enableScroll;
