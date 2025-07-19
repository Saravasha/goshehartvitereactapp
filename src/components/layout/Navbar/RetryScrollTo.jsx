import { scroller } from "react-scroll";

export default function retryScrollTo(
  target,
  options = {},
  maxRetries = 15,
  delay = 500,
  environment = "development"
) {
  let attempts = 0;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const buffer = 20;
    return rect.bottom >= 0 - buffer && rect.top <= window.innerHeight + buffer;
  }

  function scrollAttempt() {
    const element =
      document.getElementById(target) ||
      document.querySelector(`[name="${target}"]`);

    if (!element) {
      if (attempts < maxRetries) {
        attempts++;
        setTimeout(scrollAttempt, delay);
      } else {
        if (environment !== "production") {
          console.warn(
            `[retryScrollTo] Element "${target}" not found after ${maxRetries} attempts.`
          );
        }
      }
      return;
    }

    scroller.scrollTo(target, options);

    setTimeout(() => {
      const stillNotVisible = !isInViewport(element);
      if (stillNotVisible && attempts < maxRetries) {
        attempts++;
        scrollAttempt();
      } else if (stillNotVisible) {
        if (environment !== "production") {
          console.warn(
            `[retryScrollTo] "${target}" still not in view after ${attempts} attempts.`
          );
        }
      } else {
        if (environment !== "production") {
          console.log(
            `[retryScrollTo] Scrolled to "${target}" on attempt ${attempts}.`
          );
        }
      }
    }, 1000);
  }

  scrollAttempt();
}
