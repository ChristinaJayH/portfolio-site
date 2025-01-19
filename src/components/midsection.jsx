import React from 'react'
import Card from '../components/card'
import { MdOutlineModelTraining } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { TbCheckupList } from "react-icons/tb";

import '../styles/midsection.css'
const midsection = () => {
  return (
    <div className='midsection_container'>
      <Card 
      cardName='Training Support'
      description='Empowering beginners to learn cybersecurity skills and launch IT careers.'
      icon={MdOutlineModelTraining}
      />
      <Card 
      cardName='Job Search Strategy'
      description='Crafting a targeted approach to secure opportunities and build a successful career.'
      icon={TbCheckupList}
      />
      <Card 
      cardName='Interview Preparation'
      description='Preparing for interviews by refining skills, practicing responses, and building confidence.'
      icon={BsPersonBoundingBox}
      />
    </div>
  )
}

export default midsection
