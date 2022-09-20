import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types'



/**
 * Display user's score chart 
 * @component
 * @param {number} score - user score number
 * @returns {JSX.Element} ScoreGraph component
 */
const ScoreGraph = ({ score }) => {
    //console.log(score)
    const data =
        [{
            uv: score,
            fill: '#E60000'
        }]

    return (
        <div className="squareGraph">
            <ResponsiveContainer width="100%" aspect={1}>
                <RadialBarChart cx="50%" cy="50%" style={{ backgroundColor: "#FBFBFB" }} width="100%" height="100%" margin={{ top: 30, right: 30, bottom: 30, left: 30 }} innerRadius={70} barSize={10} data={data} startAngle={80} endAngle={420} >
                    <circle cx="50%" cy="50%" fill="white" r="82"></circle>
                    <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false} />
                    <RadialBar background dataKey="uv" angleAxisId={1} fill="#E60000" cornerRadius="10" data={[data[0]]} />
                    <text className='scoreSize' fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="44%" textAnchor='middle'>{`${score}%`}</text>
                    <text className='graphTitle' fontWeight="500" fill='#74798C' x="50%" y="51%" textAnchor='middle'>de votre</text>
                    <text className='graphTitle' fontWeight="500" fill='#74798C' x="50%" y="59%" textAnchor='middle'>objectif</text>
                    <text className='graphTitle' x="12%" y="15%" width={147} height={48} textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 500 }} >
                        Score </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScoreGraph;

//Proptypes
ScoreGraph.propTypes = {
    score: PropTypes.number.isRequired
}