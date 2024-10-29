import React from 'react';
import '../assets/Podium.css'; 

const Podium = ({ winners }) => {
    return (
        <div className="podium-container">
            {winners && winners.length >= 3 && (
                <div className="podium">
                    <div className="podium-position second">
                        <div className="podium-rank">2</div>
                        <div className="podium-entity">{winners[1]}</div>
                    </div>
                    <div className="podium-position first">
                        <div className="podium-rank">1</div>
                        <div className="podium-entity">{winners[0]}</div>
                    </div>
                    <div className="podium-position third">
                        <div className="podium-rank">3</div>
                        <div className="podium-entity">{winners[2]}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Podium;
