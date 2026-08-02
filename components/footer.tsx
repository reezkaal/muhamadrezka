export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-[13.5px] text-muted">
          © {new Date().getFullYear()} Muhamad Rezka Al Anshori. All rights reserved.
        </p>
        <p className="text-[13.5px] text-muted">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
