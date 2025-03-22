import { useEffect, useRef } from "react";

function KonfhubButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Guard against server-side execution (optional, for clarity)
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://widget.konfhub.com/widget.js";
    script.async = true;
    script.setAttribute("button_id", "btn_c55a733dcef2");

    const target = buttonRef.current || document.body;
    target.appendChild(script);

    return () => {
      if (target.contains(script)) {
        target.removeChild(script);
      }
    };
  }, []);

  return <div ref={buttonRef} />; // Container for the button
}

export default KonfhubButton;