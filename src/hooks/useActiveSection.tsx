import { useEffect, useState } from "react";

export function useActiveSection(
    root: HTMLElement | null,
    sectionIds: string[]
) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

    useEffect(() => {
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                root,
                threshold: 0.2,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [root, sectionIds]);

    return activeSection;
}