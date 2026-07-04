import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport,
 * for active-link highlighting in the navbar.
 */
export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    function onScroll() {
      const scrollY = window.scrollY + offset;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          current = section.id;
        }
      }
      setActiveId(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
