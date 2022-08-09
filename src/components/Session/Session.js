// Create a session commponent that will use the /refresh api to refresh the session and direct the user to the login page if the session is expired.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

require("dotenv").config();


export default function Session() {
    const [session, setSession] = useState(null);
    const history = useHistory();
    useEffect(() => {
        const getSession = async () => {
        const res = await axios.get(process.env.REFRESH_URL);
        setSession(res.data);
        }
        getSession();
    } , [])
    useEffect(() => {
        if (!session) {
        history.push("/login");
        }
    } , [session])
    return (
        <div>
        {session}
        </div>
    )
}