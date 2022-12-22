import React from 'react'
import CarEx from '../../Components/cars/CarEx'

function Cars() {
  return (
    <div className='flex absolute mt-[5rem] w-full h-full justify-center items-center mx-10'>
      <div className='w-[40%] border-r-2 pr-8 border-lime-300 shadow-lg p-10 shadow-gray-50'>
      <div className='my-8 '>
        <h1 className=' text-3xl font-bold '>Lorem Ipsum</h1>
        <p className=' text-lime-500 font-semibold'>de mots ou de listes</p>
      </div>
        <p>Lorem Ipsum est un générateur de faux textes aléatoires. 
          Vous choisissez le nombre de paragraphes, de mots ou de listes. 
          Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai text
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte
          Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.</p>
      </div>
      <div className='w-[50%]'>
      <CarEx />
      </div>
    </div>
  )
}

export default Cars