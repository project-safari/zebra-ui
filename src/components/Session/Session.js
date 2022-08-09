// Session component that checks if the user is logged in and renders the appropriate component.
// Calls Refresh API to check if the user is logged in. 
//
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

require('dotenv').config();

export default function Session() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get(process.env.REFRESH_URL)
            .then((response) => {
                setIsLoggedIn(true);
            }).catch((error) => {
                setIsLoggedIn(false);
            }
            );
    }
    , []);
    if (isLoggedIn) {
        navigate('/');
    } else {
        navigate('/login');
    }
}



