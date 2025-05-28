import React from "react";
import { NavLink } from "react-router-dom";
import { Home, FileText, FolderOpen, Info } from "lucide-react";

function Navigation() {
  return (
    <nav
      id="navbar"
      className="w-full flex items-center justify-between px-6 py-4 bg-emerald-900"
    >
      <NavLink to="/" className="flex items-center gap-2 hover:underline text-cream">
        <Home className="w-5 h-5" />
        <span className="font-sans font-medium">Home</span>
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink to="/resume" className="flex items-center gap-2 hover:underline text-cream">
          <FileText className="w-5 h-5" />
          <span className="font-sans font-medium">Resume</span>
        </NavLink>

        <NavLink to="/projects" className="flex items-center gap-2 hover:underline text-cream">
          <FolderOpen className="w-5 h-5" />
          <span className="font-sans font-medium">Projects</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
