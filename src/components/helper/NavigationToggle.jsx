import { useEffect, useRef } from "react";

const UseNavigationToggle = () => {
  const navRef = useRef(null);
  const bodyRef = useRef(null);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleToggleClick = () => {
      if (navRef.current) navRef.current.classList.toggle("show");
      if (toggleRef.current) toggleRef.current.classList.toggle("bx-x");
      if (bodyRef.current) bodyRef.current.classList.toggle("body-pd");
      if (headerRef.current) headerRef.current.classList.toggle("body-pd");
    };

    const toggleElement = toggleRef.current;
    if (toggleElement) {
      toggleElement.addEventListener("click", handleToggleClick);
    }

    return () => {
      if (toggleElement) {
        toggleElement.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);

  return { navRef, bodyRef, headerRef, toggleRef };
};

export default UseNavigationToggle;
