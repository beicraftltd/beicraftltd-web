import React, { useEffect, useRef, useState } from "react";

interface CollapsibleProps {
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  return <div className="collapsible">{children}</div>;
};

interface CollapsibleTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}

const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({
  children,
  onClick,
  isOpen,
}) => {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left transition-all duration-300 ${
        isOpen ? "expanded" : "collapsed"
      }`}
    >
      {children}
    </button>
  );
};

interface CollapsibleContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  isOpen,
  children,
}) => {
  const [contentHeight, setContentHeight] = useState<string | undefined>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      style={{ maxHeight: contentHeight }}
      className={`transition-all duration-300 overflow-hidden`}
    >
      <div
        className={`transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
