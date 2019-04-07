import React, { Component } from 'react';
import Link from 'next/link';
import Page from '../layout/main';

class App extends Component {
  render() {
    return (
      <Page>
        <header>
          <div className="header-container">
            <h1>Cristo Medina</h1>
          </div>
        </header>

        <style jsx>{`
          header {
            max-width: 600px;
            margin: 0 auto;
          }

          .header-container {
            text-align: center;
          }

          .header-container h1 {
            -webkit-text-stroke: 1px white;
            color: transparent;
            font-family: 'Poppins', sans-serif;
            text-shadow: 5px 4px #ffed5e;
            font-size: 70px;
            font-weight: bold;
          }
        `}</style>
      </Page>
    );
  }
}

export default App;
