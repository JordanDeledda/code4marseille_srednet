import React from 'react';
import Header from '../components/Header';
import Footer from "../components/footer/Footer";
import './Club.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'





function Club() {
    return (
        <div>
            <Header />
            <div class="club">

                <div class="white1"><h1>CLUB</h1></div>
                <div class="blue1"><h1 class="h1-color">RECHERCHE </h1></div>
                <div class="white1"></div>
            </div>

            <div class="club">

                <div class="blue2"></div>
                <div class="white1"><h1 class="bloc">
                                <div class="select"> 
                                    <select>
                                    <option>SPORT</option>
                                    <option value="1">Rugby</option>
                                    <option value="2">Foot</option>
                                    <option value="3">Tennis</option>
                                    <option value="4">???</option>
                                    </select>
                                </div>
                                </h1>
                                </div>
                <div class="white1"></div>

            </div>
            <div class="club">
                <div class="pink1"></div>
                <div class="pink1"></div>

                <div class="white2"></div>


            </div>

            <div class="club">
                <div class="logo"></div>

                <div class="pink2"></div>
            </div>
            <div class="club2">

                <div class="blue-nom"></div>
            </div>

            <div class="club2">

                <div class="div-border"></div>
            </div>

            <div class="club2">

                <div class="div-contact"></div>

            </div>

            <div class="club3">

                <div class="div-contact" id="ville"></div>
            </div>

            <div class="club3">

                <div class="div-border-2" id="temperature_label"></div>
            </div>

            <div class="club3">

                <div class="pink-contact"></div>
            </div>
            <div class="club4">


                <div class="blue-nom"></div>
            </div>

            <div class="club4">

                <div class="div-border"></div>
            </div>

            <div class="club4">

                <div class="div-contact"></div>

            </div>

            <div class="div-fleche">

            </div>



            <div class="club5">
                <div class="div-logo"></div>
                <div class="blue-logo"></div>

            </div>

            <div class="club5">
                <div class="blue-logo"></div>
                <div class="div-logo"></div>

            </div>

            <div class="club5">
                <div class="div-pink"></div>

            </div>

            <Footer />
        </div>
    );


}

export default Club;


