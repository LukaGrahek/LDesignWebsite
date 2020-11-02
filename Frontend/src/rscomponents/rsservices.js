/**
 * Services Section: this section will display Leda Litricin's available services,
 * and will include a button that will send the user to the contact section.
 */

import React from 'react';   //import react
import 'bootstrap/dist/css/bootstrap.min.css'; //import default boostrap CSS for the Button, and Jumbotron
import {Jumbotron,Button} from 'react-bootstrap' // Import Button and Jumbotron from react-bootstrap
import '../styles/servicesStyle.css'; // import CSS Style for this page

//when the contact button is clicked at the bottom of the services page, the user will be scrolled down to the contact section
const scrollContact = () =>{
    window.scrollTo({top: 10000, behavior: 'smooth'});
 };

const Services = () => {
    return(
        <Jumbotron id="Jtron2">

                    <h1 id="AboutTitle">Cime Se Bavim</h1>

                    <p id ='sTXT'> Kupili ste stan u staroj gradnji I zelite da ga u potpunosti adaptirate I transformisete u dom svojih snova? Posedujete nekretninu  koju zelite da  u kratkom roku unapredite I sto bolje izdate/prodate  ?  Kupili ste stan u novogradnji I zelite da ga opremite-za vas ili u svrhu izdavanja? Zelite da promenite/osvezite samo jedan deo stana?. Spremna sam da odgovorim na svaku vasu potrebu I sprovedem proces u potpunosti I u skladu sa vasim potrebama I budzetom; od ideje I projekta, pa do izvodjenja I opremanja, I  predaje’’ kljuca u ruke’’. </p>             
                    <p id ='sTXT'> Od usluga mozete ugovoriti nezavisno samo  Dizajn (izradu Projekta Enterijera sa svim informacijama I crtezima potrebnim za izvodjenje radova, kao I definiciju kompletnog namestaja, rasvete I ostale potrebne opreme) . U ovom slucaju, sami pronalazite izvodjace (pojedinacne majstote ili preduzimaca) koji su dalje tokom faze izvodjenja I opremanja  odgovorni za realizaciju projekta. </p>                 
                    <p id ='sTXT'> U slucaju da zelite da mi poverite sve tri faze, Dizajn –Izvodjenje- Opremanje, ostajem sa Vama do kraja projekta -do predaje kljuca u ruke. U tom slucaju, ceo process organizacije majstora I radova kao I svakodnevni profesionalni nadzor kvaliteta radova, montaza  i isporuka su moj posao, obaveza I odgovornost.  Fazu izvodjenja radova  I opremanja fiksnim namestajem, organizujem I sprovodim  sa grupom proverenih majstora, koji su se tokom vremena dokazalali u pogledu  skladne saradnje, kvaliteta radova, optimalne cene kao i postovanja svih dogovora I rokova.</p>
                    <p><Button id="contactB" variant="primary" onClick={scrollContact}>Contact</Button></p>
        </Jumbotron>
    )
}
    
export default Services