import { useEffect } from 'react'
import AOS from "aos";

export default function useAOS() {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      mirror: true,
      duration: 1500,
      easing: "ease-out-cubic",
    });
  });
}
