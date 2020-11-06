// about
// Stores about section html elements

import React from 'react'; // Import react framework
import pic from '../photos/clientimage.jpg'; // Import client's picture
import 'bootstrap/dist/css/bootstrap.min.css'; //Import default css for react-bootstrap
import {Jumbotron} from 'react-bootstrap' // Imports jumbotron from react

import '../styles/aboutStyle.css'; // Imports styling

// Renders about section
const About = () => {
    return(
        <Jumbotron id="Jtron">

                    <h1 id="AboutTitle">O Meni</h1>
                    <img id="pic" src={pic} alt="Leda Litricin" />
                    <p id ='aboutTXT'>
                        Rodjena u Beogradu. Pohadjala studije Arhitekture u Beogradu I diplomirala 2002 godine (M.Arch.)  Na fakultetu  pohadjala izabrano dvogodisnje usmerenje u oblasti  Enterijerijerskog dizajna . Nakon diplomiranja, polagala I stekla licencu odgovornog projektanta. Tokom studija provela  2 lepe i znacajne godine zivota u Londonu (UK). 
                    </p>
                    <p id ='aboutTXT'>
                        Radno iskustvo steceno u Srbiji (Beogradu) I internacionalno -na velikim projektima (Dubai-UAE, Shanghai-China, Almaty-Kazahstan ,Ontario-Canada) Skoro 20 godina rada u oblastima arhitektonskog I enterijerskog dizajna, dizajn koordinacije, menadzmenta I  projektantskog nadzora.
                    </p>
                    <p id ='aboutTXT'>
                        Nakon vise godina provedenih u radu na komercijalnim projektima za lokalne I nternacionalne firme,  2015  zapocinjem samostalan rad  u polju enterijerijerskog dizajna I njegovog izvodjenja.  Najvise uzivam u kreiranju rezidencijalnih enterijera - autenticnih prostora za autenticne ljude koji zive svoje uzurbane zivote u Beogradu, pa  I sire. 
                    </p>
                    {/* <p>
                        <Button variant="primary">Learn more</Button>
                    </p> */}

                   

        </Jumbotron>
    )
}
    
export default About 