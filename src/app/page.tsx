import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <menu id="menu">
      <nav>
        <h1>Spex</h1>

        <ul>
          <li className="list-item">
            <i>👉</i>
            <span> Dashboard </span>
          </li>
          <li className="list-item">
            <i>❤️</i>
            <span> Submissions </span>
          </li>
          <li className="list-item">
            <i>✔️</i>
            <span> Settings </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-item">
            <i>🎉</i>
            <span> Music Library </span>
          </li>
          <li className="list-item">
            <i>⭐</i>
            <span> Artists </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-item">
            <i>🫠</i>
            <span> FAQ </span>
          </li>
          <li className="list-item">
            <i>👍</i>
            <span> Contact Us </span>
          </li>
          <li className="list-item">
            <i>🫶</i>
            <span> About Us </span>
          </li>
          <li className="list-spacer"></li>
          <li className="list-spacer-grow"></li>
          <li className="list-item">
            <i>💀</i>
            <span>Log Out</span>
          </li>
        </ul>
      </nav>
    </menu>
    <div id="burger">🍔</div>
    <div id="app">
      <div id="main">
        <div id="header">
          <div id="clock"></div>
        </div>
        <div id="primary" className="soft-shadow">primary</div>
        <div id="secondary" className="soft-shadow">secondary</div>
        <div id="additional" className="soft-shadow">additional</div>
        <div id="misc" className="soft-shadow">misc</div>
      </div>

      <div id="sidebar-slash-footer">sidebar/footer</div>
    </div>
    </main>
  )
}
