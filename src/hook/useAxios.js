import { useState, useEffect } from 'react';
import axios from 'axios';


export const useAxios = ( url ) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {

        setState({ data: null, loading: true, error: null });

        axios
        .get(url)
        // Extract the DATA from the received response
        .then((response) => response.data)
        // Use this data to update the state
        .then( data => {
            setState({
                loading: false,
                error: null,
                data
            });
        

    });

    },[])

    return state;
}
