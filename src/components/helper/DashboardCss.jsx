import { useEffect } from "react";

const DashboardCss = () => {
  useEffect(() => {
    const dashboardCss = document.getElementById("dashboard-css");
    if (dashboardCss) {
      dashboardCss.removeAttribute("disabled");
    }
    return () => {
      if (dashboardCss) {
        dashboardCss.setAttribute("disabled", "disabled");
      }
    };
  }, []);
};

export default DashboardCss;
