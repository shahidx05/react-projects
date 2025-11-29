import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="cc-app">
      <div className="cc-card">
        {/* Header */}
        <header className="cc-header">
          <h1>Currency Converter</h1>
          <p>Convert money between different currencies instantly.</p>
        </header>

        {/* Amount */}
        <section className="cc-section">
          <label className="cc-label" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="cc-input"
            placeholder="Enter amount"
          />
        </section>

        {/* From / To */}
        <section className="cc-section cc-row">
          <div className="cc-field">
            <label className="cc-label" htmlFor="from">
              From
            </label>
            <div className="cc-select-wrapper">
              <span className="cc-flag">🇺🇸</span>
              <select id="from" className="cc-select">
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
          </div>

          <button className="cc-swap-btn" type="button">
            ⇄
          </button>

          <div className="cc-field">
            <label className="cc-label" htmlFor="to">
              To
            </label>
            <div className="cc-select-wrapper">
              <span className="cc-flag">🇮🇳</span>
              <select id="to" className="cc-select">
                <option value="INR">INR - Indian Rupee</option>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
          </div>
        </section>

        {/* Convert button */}
        <section className="cc-section">
          <button className="cc-convert-btn" type="button">
            Convert
          </button>
        </section>

        {/* Result box */}
        <section className="cc-section">
          <div className="cc-result">
            <div className="cc-result-top">
              <span className="cc-result-label">Converted Amount</span>
              <span className="cc-result-rate">
                1 USD = 83.25 INR
              </span>
            </div>
            <div className="cc-result-value">--</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="cc-footer">
          <span className="cc-dot"></span>
          <p>Design only • No API or logic implemented</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
