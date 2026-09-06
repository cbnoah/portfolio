import { useEffect, useState, type RefObject } from "react";

export function useActiveSection(
    rootRef: RefObject<HTMLElement | null> | HTMLElement | null,
    sectionIds: string[]
) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

    useEffect(() => {
        const root = rootRef && "current" in rootRef ? rootRef.current : rootRef;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root,
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [rootRef]);

    return activeSection;
}