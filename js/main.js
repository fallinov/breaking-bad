/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande une interprétation stricte du code
const axios = require("axios");


async function getPersonnages() {
    try {
        const response = await axios
            .get('https://www.breakingbadapi.com/api/characters/');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

await getPersonnages()