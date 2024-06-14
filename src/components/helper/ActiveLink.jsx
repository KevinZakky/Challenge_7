import { useEffect, useState } from "react";

const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const linkColor = document.querySelectorAll(".nav_link");

    const colorLink = function () {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      setActiveLink(this);
    };

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    return () => {
      linkColor.forEach((l) => l.removeEventListener("click", colorLink));
    };
  }, []);

  return activeLink;
};

export default useActiveLink;
