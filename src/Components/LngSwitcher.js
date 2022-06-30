import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Br from '../Assets/brazil.png'
import Usa from '../Assets/united-states.png'

function LngSwitcher() {
    const { t, i18n } = useTranslation()

    const lngOptions = [
        {
            name: "Portuguese(Brazil)",
            value: "ptBR",
            flag: Br
        },
        {
            name: "English",
            value: "en",
            flag: Usa
        }
    ]

  return (
    <div className="flex">
        {lngOptions.map(lngOptions =>(
            <button className='flex justify-center items-center p-4 font-semibold hover:text-fuchsia-500' key={lngOptions.value} onClick={()=>{
                i18n.changeLanguage(lngOptions.value)
            }}><a className='pr-4'>{lngOptions.name}</a><img src={lngOptions.flag} alt={lngOptions.name}/></button>
        ))}
    </div>
  )
}

export default LngSwitcher