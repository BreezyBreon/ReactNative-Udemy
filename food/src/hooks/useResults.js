import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        console.log('Hi There');
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // call searchAPI when component is first rendered
    useEffect(() => {
        searchAPI('pasta')
    }, []);

    return [searchAPI, results, errorMessage];
};