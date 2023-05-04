import React from 'react'
import Card from '../components/Card/card'
import africaPic from "../Images/FB_IMG_1674545305081.jpg"


const Aboutpage = () => {
  return (
    <main>
        <h1>This is the about page</h1>
        <section>
          <Card service="Marketing" desc="We are your one stop marketing platform, for your products." img_alt="mat_logo" img_path={africaPic}/>

          <Card service="Techonology" desc="We are your one stop technology platform, for your products." img_alt="tech_logo" img_path={africaPic}/>

          <Card service="Data Mining" desc="We are your one stop data mining platform, for your products." img_alt="data_logo" img_path={africaPic}/>

          <Card service="Counselling" desc="We are your one stop counseling platform, for your products." img_alt="Cou_logo" img_path={africaPic}/>
        </section>
    </main>
  )
}

export default Aboutpage