import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="footer absolute w-full bottom-0 bg-base-100 content-center">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center  px-8 py-3 gap-x-20 w-full">
        <nav className="flex  gap-x-3">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Advertising</a>
          <a className="link link-hover whitespace-nowrap">How Search Works</a>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <nav className="flex  gap-x-3">
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Settings</a>
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
