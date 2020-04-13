import React, { Component } from 'react'
import Navbar from './compontents/navbar'
import Sidebar from './compontents/sidebar'
import Content from './compontents/content'
import Footer from './compontents/footer'

import './App.css';

class App extends Component{
  render(){
    const navbarItem = {
      navbar: [
        { id: 1, label: 'Home'},
        { id: 2, label: 'Profile'},
        { id: 3, label: 'Gallery'},
        { id: 4, label: 'Media'}
      ]
    };

    const profile = {
      avatar: 'https://insidelombok.id/wp-content/uploads/2020/03/1_4837302.jpg',
      nama: 'Covid-19',
      jeniskelamin: 'Unknown',
      ttl: 'China, 17 November 2019'
    };

    const content = {
      judul: 'Pandemic COVID-19',
      pembuka: "Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease was first identified in December 2019 in Wuhan, the capital of China's Hubei province, and has since spread globally, resulting in the ongoing 2019–20 coronavirus pandemic. Common symptoms include fever, cough, and shortness of breath. Other symptoms may include fatigue, muscle pain, diarrhea, sore throat, loss of smell, and abdominal pain. The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days. While the majority of cases result in mild symptoms, some progress to viral pneumonia and multi-organ failure.",
      tulisan: "The standard method of diagnosis is by real-time reverse transcription polymerase chain reaction (rRT-PCR) from a nasopharyngeal swab. Chest CT imaging may also be helpful for diagnosis in individuals where there is a high suspicion of infection based on symptoms and risk factors but is not recommended for routine screening. Recommended measures to prevent infection include frequent hand washing, maintaining physical distance from others (especially from those with symptoms), covering coughs and sneezes with a tissue or inner elbow, and keeping unwashed hands away from the face. The use of masks is recommended for those who suspect they have the virus and their caregivers. Recommendations for mask use by the general public vary, with some authorities recommending against their use, some recommending their use, and others requiring their use. Currently, there is no vaccine or specific antiviral treatment for COVID-19. Management involves treatment of symptoms, supportive care, isolation, and experimental measures.",
      penutup: "The World Health Organization (WHO) declared the 2019–20 coronavirus outbreak a Public Health Emergency of International Concern (PHEIC) on 30 January 2020 and a pandemic on 11 March 2020. Local transmission of the disease has been recorded in many countries across all six WHO regions."
    };

    const media = [
      { logo: 'https://pngimg.com/uploads/instagram/instagram_PNG10.png', label: '@corona-19'},
      { logo: 'https://cdn.clipart.email/14d9f50bcfceaf7eda23d325c19a613e_facebook-logo-facebook-computer-icons-desktop-icon-facebook-_800-800.jpeg', label: 'corona-19@gmail.com'},
      { logo: 'https://i7.pngguru.com/preview/50/642/525/gmail-email-computer-icons-google-logo-gmail.jpg', label: 'corona-19@gmail.com'},
      { logo: 'https://www.pinclipart.com/picdir/middle/91-916281_clipart-png-whatsapp-logotype-png-images-logo-whatsapp.png', label: '082112345678'},
    ];
    
    return(
      <div className="body">
          <Navbar navbarItem={navbarItem}/>
        <div className="row">
          <div className="side">
            <Sidebar profil={profile}/>
          </div>
          <div className="main">
            <Content content={content} />
          </div>
          <Footer media={media}/>
        </div>

      </div>
    );
  }
}

export default App;