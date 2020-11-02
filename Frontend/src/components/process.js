// process
// Stores the html elements of the process section

import React from 'react'; // Imports react framework

import '../styles/processStyle.css' // Imports styling

// Renders html elements
const Process = () => {
    return (
        <div id='infoTable'>
            <h1 id='ProcessTitle'>Process</h1>
            <table>
                <tr>
                    <th id='left'>ABOUT THE PROCESS</th>
                    <th id='center'>MANAGEMENT</th>
                    <th id='right'>IMPLEMENTING</th>
                </tr>
                <tr>
                    <td id='left'>The collaboration process always begins with getting to know each other through an open conversation about who my Client is, and how He / She wants to live. I want to hear everything about your future space as well as your needs, preferences, tastes, desires, expectations and dreams ... Establishing an open dialogue through a constructive exchange of information, ideas and opinions, leads to the establishment of mutual understanding, trust and harmonious cooperation. It is important to be honest, relaxed, open to new ideas and to allow / let a professional advise and guide you through the whole process. The best solutions come from such cooperation: functional, authentic, carefully tailored spaces / ambiences in which you will be able to recognize yourself. Each new project, for me, represents a new challenge and actually gives a unique answer (in terms of function and style) to the initial, very personal and complex question, who are you and how do you want to live. </td>

                    <td id='center'>During the cooperation, my approach to work, clients and all associates is friendly but at the same time organized. Great commitment to each individual client and project, availability and flexibility during the cooperation, as well as personal and professional integrity, are principles that I never give up and that you can count on. Also, one of my important goals is to fit the planned proposals and solutions into the planned budget. Budgets can vary, especially when it comes to furnishing. It is nice to work with a high budget, but with the right solution and choice, it is possible to achieve a very nice, attractive environment with smaller funds, which will fully meet all the criteria.
I believe that interiors must be spaces created as a result of a function tailored to man and not mere scenery. Created spaces and ambiences are sets-scenes, but created not for theater, but for real life and real people… Tailor-made, such interiors fully reflect their future users. With their authentic beauty and meaning, they touch their hearts (including mine) in the broadest and most beautiful possible sense. I really like what I do and I try to pass on my enthusiasm and knowledge to my clients, while providing them with the necessary support in every idea, wish and step. My basic and at the same time the most important goal is to be satisfied with the whole process of cooperation as well as to be completely surprised and truly delighted with the end result! </td>

                    <td id='right'> My clients are mostly family people or individuals who are actively engaged in their professions and who live their hectic city lives ... In 100% of cases, they respond through the recommendation of friends or former satisfied clients. These are people who have above-average expectations regarding the functional-aesthetic solutions of the space in which they want to live or which they want to rent / sell. They understand that they need professional help in achieving that goal and at the same time they want to avoid mistakes, bad solutions and save their time, nerves and money. In addition, they know that this is the best way to raise the value of their property.</td>
                </tr>
            </table>
        </div>

    )
}

export default Process