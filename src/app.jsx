import React from 'react';
import Podium from '../src/components/Podium';

function App() {
    const winners = ['TOP 1', 'TOP 2', 'TOP 3'];

    return (
        <div className="App">
            <h1>Le Podium </h1>
            <Podium winners={winners} />
        </div>
    );
}

export default App;
