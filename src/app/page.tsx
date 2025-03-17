import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './page.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <header className="header sticky-header">
        <Image src="/logo.png" alt="Logo" className="header-logo" width={340} height={100} />
        <h1 className="header-title">Pythius</h1>
      </header>
      <section id="home" className="section home">
        <div className="home-content">
          <Image src="/raymond.jpeg" alt="Profile" className="profile-photo small-profile-photo" width={150} height={150} />
          <div className="home-text">
            <div className="home-text1">
              <h2 style={{ marginBottom: '20px' }}><b>Pythius Organisatieontwikkeling vanuit Mens en motivatie</b></h2>
            </div>
            <p><strong>Pythius</strong> staat voor begrijpen.</p>
            <p>Begrijpen waar <strong>behoeften</strong> en <strong>wensen</strong> te vertalen zijn in beleid en praktijk.</p>
            <p>Begrijpen waar <strong>resultaten</strong> beter kunnen, organisaties succesvoller en mensen gemotiveerder.</p>
            <p><strong>Pythius</strong> ondersteunt en adviseert in veranderende omgevingen, met verschillende mensen van uiteenlopende organisaties.</p>
            <p><strong>Pythius</strong> is Raymond van Dasselaar.</p>
          </div>
        </div>
      </section>
      <section id="pythius" className="section pythius" style={{ backgroundImage: 'url(/vijfer3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="home-text" style={{ color: '#151528' }}>
          <div className="home-text1">
          <h2 style={{ marginBottom: '20px' }}><b>Pythius</b></h2>
          </div>
          <p>Information about <strong>Pythius</strong>.</p>
          <p><strong>Pythius</strong> ondersteunt mensen en organisaties bij hun ontwikkeling</p>
          <p><strong>Pythius</strong> is Raymond van Dasselaar, handelend onder de naam <strong>Pythius</strong>.</p>
          <p>Met een open blik kijkt Raymond binnen bij zijn opdrachtgevers.</p>
          <p>Luisterend, onderzoekend en analyserend gaat hij met zijn gesprekspartners op zoek. Verhalend en vertalend geeft hij vorm en inhoud aan beleid en uitvoering.</p>
          <p>Vaak noemt men hem enthousiast en betrokken.</p>
          <p>In uiteenlopende resultaatgebieden, zoals <strong>HRM, ICT</strong>, Kwaliteitsmanagement en Projectmanagement ontwikkelde Raymond zijn kennis.</p>
          <p>Zijn ervaring deed hij op bij grote organisaties in diverse branches.</p>
          <p>Vanaf 2006 is Raymond als zelfstandig adviseur betrokken bij de groei en ontwikkeling van mensen en organisaties. Adviserend en beleid realiserend is hij momenteel actief in stadsdelen en de centrale stad van Amsterdam.</p>
          <p>Daarnaast ondersteunt hij, adviserend en audits begeleidend, de landelijke <strong>ICT</strong> ondersteunende organisatie van de Politie.</p>
            <div className="home-text1">
            <h3 style={{ marginBottom: '20px' }}><b>De mythe</b></h3>
            </div>
          <p>Reeds kort na zijn geboorte doodde Apollon door zijn pijlen Python.</p>
          <p>Python, de draak die het heiligdom Pytho nabij de berg Parnassus onveilig maakte.</p>
          <p>Naar deze overwinning verkreeg Apollon de naam van Apollon Pythios (de Pythische).</p>
          <p>Hij zou van het heiligdom Pytho het zijne maken, wat bekend werd als het orakel van Delphi.</p>
          <p>Jaarlijks werden, in dankbare herinnering, de Pythische Spelen georganiseerd.</p>
            <div className="home-text1">
            <h3 style={{ marginBottom: '20px' }}><b>Pythius</b></h3>
            </div>
          <p>
            <strong>Glijdend</strong> door de lucht<br />
            overzichtelijk ziend<br />
            vergezeld van eeuwige wijsheid<br />
            een draak<br />
          </p>
          <p>
            <strong>Pythius</strong> zacht verschroeiend<br />
            frisse kijk<br />
            nimmer dwingend<br />
            immer inspirerend<br />
          </p>
          <p>
            De andere weg<br />
            is dichter bij<br />
            dan jijzelf.<br />
          </p>
        </div>
      </section>
      <section id="referentie" className="section referentie">
        <h2>Referentie</h2>
        <p>???</p>
      </section>
      <section id="contact" className="section contact">
      <h2 style={{ marginBottom: '20px' }}><b>Contact</b></h2>
        <div className="home-content contact-content">
          <div className="home-text">
            <p><strong>Raymond van Dasselaar</strong></p>
            <p>Zelfstandig Organisatieadviseur</p>
            <p>Kantemarsweg 8d</p>
            <p>3871 AP Hoevelaken</p>
            <p>06-39788959</p>
            <p><a href="mailto:Pythius@me.com">Pythius@me.com</a></p>
            <p>Kamer van Koophandel 32117074</p>
            <p>ABN AMRO 54.45.99.942</p>
            <p>BTW NL192377310B01</p>
          </div>
          <Image src="/r1.jpg" alt="Contact Image" className="contact-image" width={150} height={150} />
        </div>
      </section>
      <section id="link" className="section link">
        <h2><b>Link</b></h2>
        <div className="social-media">
          <a href="https://wa.me/---" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.linkedin.com/---" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/---" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
