import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-cream w-full py-8 text-slate-900 font-sans text-lg shadow-inner border-t border-slate-300"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="mailto:sthor726@gmail.com"
          className="flex items-center gap-2 transition hover:underline hover:text-emerald-800"
        >
          <Mail className="w-5 h-5" />
          Email Me
        </a>
        <a
          href="https://github.com/Sthor726"
          className="flex items-center gap-2 transition hover:underline hover:text-emerald-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/samuel-thorson-1a8a5522b"
          className="flex items-center gap-2 transition hover:underline hover:text-emerald-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
