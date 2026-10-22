import { createPortal } from "react-dom";
import { useEffect } from "react";
import css from "./Sidebar.module.css";

interface SidebarProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Sidebar({ children, onClose }: SidebarProps) {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      console.log(event.code);
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <div className={css.wrapper}>
      <div className={css.sidebar}>
        <button onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById("sidebar-root")!,
  );
}

export default Sidebar;
