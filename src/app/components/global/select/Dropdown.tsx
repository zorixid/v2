import React, { useEffect, useState, useRef } from "react";

interface Props {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Dropdown({ content, children }: Props) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e: any) => {
    if (e.target.id === "close") setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative`}>
      <div onClick={toggleDropdown}>{content}</div>

      {isOpen &&
        React.cloneElement(children as React.ReactElement, {
          onClick: closeDropdown,
        })}
    </div>
  );
}
