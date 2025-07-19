import { scroller } from "react-scroll";

export default function retryScrollTo(
  target,
  options = {},
  maxRetries = 10,
  delay = 200
) {
  let attempts = 0;

  function scroll() {
    const element =
      document.getElementById(target) ||
      document.querySelector(`[name="${target}"]`);

    if (element) {
      scroller.scrollTo(target, options);
    } else if (attempts < maxRetries) {
      attempts++;
      setTimeout(scroll, delay);
    } else {
      console.warn(
        `retryScrollTo: Could not find target "${target}" after ${maxRetries} attempts.`
      );
    }
  }

  scroll();
}
