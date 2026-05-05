import { useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const PROJECTS = [
  {
    title: "E-Commerce App",
    category: "Full Stack",
    tools: "Next.js, TypeScript, node.js, MongoDB",
    image: "/images/ecom1.png",
  },
  {
    title: "E-Commerce App",
    category: "Full Stack",
    tools: "Next.js, TypeScript, Node.js, MongoDB",
    image: "/images/ecom2.png",
  },
  {
    title: "Gym app",
    category: "UI/UX",
    tools: "React, Tailwind, Figma",
    image: "/images/gym.png",
  },
  {
    title: "Dashboard UI",
    category: "UI/UX",
    tools: "React, Tailwind, Figma",
    image: "/images/business1.png",
  },
  {
    title: "Dashboard UI",
    category: "UI/UX",
    tools: "React, Tailwind, Fumadocs",
    image: "/images/ui.png",
  },
  {
    title: "Dashboard UI",
    category: "UI/UX",
    tools: "React, Tailwind, Figma",
    image: "/images/project3.webp",
  },
];

const Work = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const track = trackRef.current;
    if (!inner || !track) return;

    let x = 0, targetX = 0;
    let isDragging = false, startX = 0, startScrollX = 0;
    let animId: number;

    const getSetWidth = () => {
      const box = inner.querySelector(".work-box") as HTMLElement;
      if (!box) return 0;
      return box.offsetWidth * PROJECTS.length;
    };

    const initOffset = () => {
      const setWidth = getSetWidth();
      x = setWidth;
      targetX = setWidth;
    };
    initOffset();

    const loop = () => {
      x += (targetX - x) * 0.1;
      if (Math.abs(targetX - x) < 0.3) x = targetX;

      const setWidth = getSetWidth();
      if (setWidth > 0) {
        if (x >= setWidth * 2) {
          x -= setWidth;
          targetX -= setWidth;
        }
        if (x < setWidth) {
          x += setWidth;
          targetX += setWidth;
        }
        inner.style.transform = `translateX(${-x}px)`;
      }

      animId = requestAnimationFrame(loop);
    };
    loop();

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      targetX += e.deltaY * 1.2;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startScrollX = targetX;
      track.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      targetX = startScrollX - (e.clientX - startX);
    };

    const onMouseUp = () => {
      isDragging = false;
      track.style.cursor = "grab";
    };

    let touchStartX = 0, touchScrollX = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchScrollX = targetX;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      targetX = touchScrollX - (e.touches[0].clientX - touchStartX);
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const allCards = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <div className="work-section" id="work">
      <div className="work-header section-container">
        <h2>
          My <span>Work</span>
        </h2>
      </div>
      <div className="work-track" ref={trackRef}>
        <div className="work-flex" ref={innerRef}>
          {allCards.map((project, i) => (
            <div className="work-box" key={i}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{(i % PROJECTS.length) + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;