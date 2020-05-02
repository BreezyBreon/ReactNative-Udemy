import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MHjk1LYnykao99kXWn_Orbq965LVcPf_ysXK6LE6s4Lnd_584_ZkOFOsxbg9XXSt9os2fj_BXABUeViGfKft6zARVmM4xLYdhDDrtpKM_TpNGwyv5Dt0ezFLCPisXnYx'
    }
});




