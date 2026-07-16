export default function Footer() {
  return (
    <footer className="px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-sm text-neutral-500 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <p>&copy; {new Date().getFullYear()} Addison Hagan</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/AHagan24"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <span aria-hidden="true">&middot;</span>
            <a
              href="https://www.linkedin.com/in/addison-hagan-32583732a/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">&middot;</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Resume
            </a>
          </div>
          <a href="#home" className="transition hover:text-white">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
