import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans flex">
      <menu id="menu" className="hidden lg:flex basis-96 p-8">
        <nav>
          <h1 className="py-4">Spex</h1>

          <ul className="flex-column space-y-4">
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>👉</span>
              <span>Dashboard </span>
            </li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>❤️</span>
              <span>Submissions </span>
            </li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>✔️</span>
              <span>Settings </span>
            </li>
            <li className="list-spacer"></li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>🎉</span>
              <span>Music Library </span>
            </li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>⭐</span>
              <span>Artists </span>
            </li>
            <li className="list-spacer"></li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>🫠</span>
              <span>FAQ </span>
            </li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>👍</span>
              <span>Contact Us </span>
            </li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>🫶</span>
              <span>About Us </span>
            </li>
            <li className="list-spacer"></li>
            <li className="list-spacer-grow"></li>
            <li className="space-x-2 p-2 hover:bg-slate-900">
              <span>💀</span>
              <span>Log Out</span>
            </li>
          </ul>
        </nav>
      </menu>
      <div id="burger" className="lg:hidden">
        🍔
      </div>
      <div id="app" className="2xl:flex basis-full">
        <div id="main" className="flex-column 2xl:basis-2/3 space-y-4 py-4 lg:p-4">
          <div id="header">
            <div id="clock"></div>
          </div>
          <div id="primary" className="lg:p-4 rounded-xl lg:shadow-lg dark:lg:shadow-slate-800/25">
            primary
          </div>
          <div id="secondary" className="lg:p-4 rounded-xl lg:shadow-lg dark:lg:shadow-slate-800/25">
            secondary
          </div>
          <div id="additional" className="lg:p-4 rounded-xl lg:shadow-lg dark:lg:shadow-slate-800/25">
            additional
          </div>
          <div id="misc" className="lg:p-4 rounded-xl lg:shadow-lg dark:lg:shadow-slate-800/25">
            misc
          </div>
        </div>

        <div
          id="sidebar-slash-footer"
          className="2xl:basis-1/3 lg:p-4 lg:mx-4 lg:shadow-lg dark:lg:shadow-slate-800/25 2xl:shadow-none"
        >
          sidebar/footer
        </div>
      </div>
    </main>
  );
}
