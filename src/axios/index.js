import axios from 'axios';

export default axios.create({
    baseURL: 'https://levelup-apparel-backend.herokuapp.com/'
})