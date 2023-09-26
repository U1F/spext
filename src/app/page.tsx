import Image from 'next/image'

export default function Home() {
  return (
    <main className="font-sans flex">
      <menu id="menu" className="hidden lg:flex basis-96 bg-slate-700">
      <nav>
        <h1>Spex</h1>

        <ul>
          <li className="list-item">
            <span>👉</span>
            <span> Dashboard </span>
          </li>
          <li className="list-item">
            <span>❤️</span>
            <span> Submissions </span>
          </li>
          <li className="list-item">
            <span>✔️</span>
            <span> Settings </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-item">
            <span>🎉</span>
            <span> Music Library </span>
          </li>
          <li className="list-item">
            <span>⭐</span>
            <span> Artists </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-item">
            <span>🫠</span>
            <span> FAQ </span>
          </li>
          <li className="list-item">
            <span>👍</span>
            <span> Contact Us </span>
          </li>
          <li className="list-item">
            <span>🫶</span>
            <span> About Us </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-spacer-grow"></li>
          <li className="list-item">
            <span>💀</span>
            <span>Log Out</span>
          </li>
        </ul>
      </nav>
    </menu>
    <div id="burger" className="lg:hidden">🍔</div>
    <div id="app" className="2xl:flex bg-cyan-700 basis-full">
      <div id="main">
        <div id="header">
          <div id="clock"></div>
        </div>
        <div id="primary" className="shadow bg-indigo-700">primary</div>
        <div id="secondary" className="shadow bg-fuchsia-800">secondary</div>
        <div id="additional" className="shadow bg-pink-800">additional</div>
        <div id="misc" className="shadow bg-violet-800">misc</div>
      </div>

      <div id="sidebar-slash-footer">sidebar/footer</div>
    </div>
    </main>
  )
}
