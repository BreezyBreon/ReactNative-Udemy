import axios from 'axios';

export default axios.create({
    baseURL:'http://002802c1.ngrok.io'
    // run new ngrok URL every 8 hours for rendering express API
}); 