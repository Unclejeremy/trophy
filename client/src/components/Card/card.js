import React from 'react'

const Card = ({img_path, img_alt, service, desc}) => {
  return (
    <div style={{width: "250px", border: "1px solid black", textAlign: "center", }}>
        <div style={{borderRadius
        : "50%", overflow: "hidden"}}>
            <img src={img_path} alt={img_alt} width={200} height={200}/>
        </div>
        <h4>{service}</h4>
        <p>{desc}</p>
    </div>
  )
}

export default Card