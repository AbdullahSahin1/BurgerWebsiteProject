import React from 'react';
import banneryeni from '../images/banneryeni.jpg'
import '../styles/about.css'
export const About = () => {
  return <div>
    <div className="about">
      <div className='aboutTop' style={{backgroundImage:`url(${banneryeni})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus atque quidem cum molestias itaque! Repudiandae architecto ratione minima quos, non ipsam similique cum quaerat doloremque aut pariatur saepe nostrum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi quisquam commodi saepe fugiat placeat explicabo adipisci possimus inventore, deserunt ipsum nostrum tempora assumenda consectetur distinctio! Optio esse ut fuga?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae aspernatur nostrum ad iusto blanditiis vitae facere quis deserunt assumenda? Corrupti hic quia sequi voluptatum ea non et expedita nihil?
        </p>
      </div>
    </div>
  </div>;
};
