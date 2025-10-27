import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'results', label: 'Latest Results' },
    { id: 'fixtures', label: 'Upcoming Fixtures' },
    { id: 'tips', label: 'Tips & Advice' }
  ]

  return (
    <div className="App">
      <header className="fpl-header">
        <div className="header-content">
          <h1>Fantasy Premier League Hub</h1>
          <p className="tagline">Your ultimate FPL companion</p>
        </div>
      </header>

      <nav className="tab-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="content">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'results' && <ResultsTab />}
        {activeTab === 'fixtures' && <FixturesTab />}
        {activeTab === 'tips' && <TipsTab />}
      </main>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="tab-content">
      <h2>Welcome to FPL Hub</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Gameweek Status</h3>
          <p className="stat-value">Gameweek 11</p>
          <p className="stat-label">In Progress</p>
        </div>
        <div className="stat-card">
          <h3>Average Score</h3>
          <p className="stat-value">54 pts</p>
          <p className="stat-label">This Gameweek</p>
        </div>
        <div className="stat-card">
          <h3>Top Transfer</h3>
          <p className="stat-value">Haaland</p>
          <p className="stat-label">Most Bought</p>
        </div>
      </div>
      <div className="news-section">
        <h3>Latest News</h3>
        <div className="news-item">
          <span className="news-badge">Breaking</span>
          <p>Salah confirms availability for next gameweek</p>
        </div>
        <div className="news-item">
          <span className="news-badge">Injury</span>
          <p>Son expected to miss upcoming fixture</p>
        </div>
      </div>
    </div>
  )
}

function ResultsTab() {
  return (
    <div className="tab-content">
      <h2>Latest Results</h2>
      <div className="results-list">
        <div className="result-card">
          <div className="match-header">Gameweek 10</div>
          <div className="match-row">
            <span className="team">Manchester City</span>
            <span className="score">3 - 1</span>
            <span className="team">Brighton</span>
          </div>
          <div className="fpl-highlights">
            <p>🌟 Haaland (2 goals, 12 pts) • De Bruyne (1 assist, 6 pts)</p>
          </div>
        </div>
        <div className="result-card">
          <div className="match-header">Gameweek 10</div>
          <div className="match-row">
            <span className="team">Liverpool</span>
            <span className="score">2 - 0</span>
            <span className="team">Aston Villa</span>
          </div>
          <div className="fpl-highlights">
            <p>🌟 Salah (1 goal, 1 assist, 13 pts) • Alexander-Arnold (1 assist, 9 pts)</p>
          </div>
        </div>
        <div className="result-card">
          <div className="match-header">Gameweek 10</div>
          <div className="match-row">
            <span className="team">Arsenal</span>
            <span className="score">1 - 1</span>
            <span className="team">Chelsea</span>
          </div>
          <div className="fpl-highlights">
            <p>🌟 Saka (1 goal, 7 pts) • Palmer (1 goal, 7 pts)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FixturesTab() {
  return (
    <div className="tab-content">
      <h2>Upcoming Fixtures</h2>
      <div className="fixtures-list">
        <div className="fixture-card">
          <div className="fixture-header">Gameweek 11 - Saturday</div>
          <div className="fixture-row">
            <span className="team">Manchester United</span>
            <span className="vs">vs</span>
            <span className="team">Newcastle</span>
            <span className="time">15:00</span>
          </div>
          <div className="fixture-difficulty">
            <span className="difficulty home medium">MUN: 3/5</span>
            <span className="difficulty away medium">NEW: 3/5</span>
          </div>
        </div>
        <div className="fixture-card">
          <div className="fixture-header">Gameweek 11 - Saturday</div>
          <div className="fixture-row">
            <span className="team">Tottenham</span>
            <span className="vs">vs</span>
            <span className="team">West Ham</span>
            <span className="time">17:30</span>
          </div>
          <div className="fixture-difficulty">
            <span className="difficulty home easy">TOT: 2/5</span>
            <span className="difficulty away hard">WHU: 4/5</span>
          </div>
        </div>
        <div className="fixture-card">
          <div className="fixture-header">Gameweek 11 - Sunday</div>
          <div className="fixture-row">
            <span className="team">Liverpool</span>
            <span className="vs">vs</span>
            <span className="team">Bournemouth</span>
            <span className="time">14:00</span>
          </div>
          <div className="fixture-difficulty">
            <span className="difficulty home easy">LIV: 2/5</span>
            <span className="difficulty away hard">BOU: 5/5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TipsTab() {
  return (
    <div className="tab-content">
      <h2>Tips & Advice</h2>
      <div className="tips-section">
        <div className="tip-card featured">
          <h3>🔥 Hot Pick of the Week</h3>
          <div className="player-highlight">
            <p className="player-name">Mohamed Salah</p>
            <p className="player-team">Liverpool - £13.0m</p>
            <p className="tip-reason">
              Excellent form with 4 goals in last 3 games. Liverpool face Bournemouth (H) - one of the best fixtures possible.
            </p>
          </div>
        </div>

        <div className="tip-card">
          <h3>💎 Differential Pick</h3>
          <p className="player-name">Bryan Mbeumo</p>
          <p className="player-team">Brentford - £7.2m</p>
          <p className="tip-reason">
            Only 5% owned but has great fixtures and is on penalties. Budget-friendly option.
          </p>
        </div>

        <div className="tip-card">
          <h3>⚠️ Players to Avoid</h3>
          <ul className="avoid-list">
            <li><strong>Heung-Min Son</strong> - Injury concern, may not feature</li>
            <li><strong>Erling Haaland</strong> - Blank in last 2, rotation risk</li>
            <li><strong>James Maddison</strong> - Poor form, difficult fixture</li>
          </ul>
        </div>

        <div className="tip-card">
          <h3>📊 Captain Picks</h3>
          <ol className="captain-list">
            <li><strong>Salah (C)</strong> - Safe pick, excellent fixture</li>
            <li><strong>Haaland (C)</strong> - Differential, due a haul</li>
            <li><strong>Palmer (C)</strong> - Form player, on set pieces</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
