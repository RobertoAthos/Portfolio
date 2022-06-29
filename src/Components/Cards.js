import React from 'react'


function Cards({img,title,desc,title2,desc2,title3,desc3,desc3_2, desc3_3, desc3_4}) {
  return (
    <div className="mb-10 w-96 md:w-96 text-center rounded-3xl border-solid border-2 border-gray-200 p-4 bg-white shadow-md">
    <div className="w-full flex justify-center items-center mt-6">
      <img src={img} alt='imagem ilustrativa'/>
    </div>
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <p className="text-xl font-extralight">
        {desc}
      </p>
    </div>
    <div className="mb-6">
      <h3 className="text-blue-700 text-xl mb-6">{title2}</h3>
      <p className="text-xl font-extralight">{desc2}</p>
    </div>
    <div className="mb-6">
      <h3 className="text-blue-700 text-xl mb-6">{title3}</h3>
      <ul>
        <li className="text-xl font-extralight">{desc3}</li>
        <li className="text-xl font-extralight">{desc3_2}</li>
        <li className="text-xl font-extralight">{desc3_3}</li>
        <li className="text-xl font-extralight">{desc3_4}</li>
      </ul>
    </div>
  </div>
  )
}

export default Cards