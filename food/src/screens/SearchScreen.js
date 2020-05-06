import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';


const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
        />
            
            {errorMessage ? <Text>{errorMessage}</Text> :null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title ="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Expensive"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;