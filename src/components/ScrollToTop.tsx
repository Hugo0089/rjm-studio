import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, key, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    html.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      html.scrollTop = 0;
    });

    return () => {
      html.style.scrollBehavior = previousBehavior;
    };
  }, [pathname, key, hash]);

  return null;
}
