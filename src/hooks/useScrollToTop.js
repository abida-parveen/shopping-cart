import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Avoid conflict between scrolling to top or categories when user clicks 'Find Products link'
    if (location.hash !== '#categories') {
      window.scrollTo(0, 0);
    }
    
  }, [location]);
}

export default useScrollToTop;
