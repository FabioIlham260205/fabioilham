import React from "react";
import { 
  Database, 
  Code, 
  Palette, 
  Terminal, 
  Layout, 
  GitBranch, 
  Cpu, 
  Layers 
} from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case "HtmlIcon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z" />
          <path d="M8 6h8" />
          <path d="M8 10h8" />
          <path d="M8 14h4" />
        </svg>
      );
    case "CssIcon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8" />
          <path d="M12 7v8" />
        </svg>
      );
    case "JsIcon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 9h-2a2 2 0 0 0-2 2v4" />
          <path d="M11 15h4" />
        </svg>
      );
    case "PhpIcon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="12" x="3" y="6" rx="2" />
          <path d="M7 10h2" />
          <path d="M7 14h2" />
          <line x1="17" y1="10" x2="17" y2="14" />
          <path d="M13 10h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1h-2" />
        </svg>
      );
    case "DatabaseIcon":
      return <Database className={className} />;
    case "LaravelIcon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "UiUxIcon":
      return <Layout className={className} />;
    case "GitIcon":
      return <GitBranch className={className} />;
    default:
      return <Terminal className={className} />;
  }
};
