import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import '../Style/content.css'

const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://thronesapi.com/api/v2/Characters');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);  

    return (
        <> 
        {
            console.log(data)
        }
        <h2 >POPULAR CHARACTERS</h2>
            <div className="card-container">
                {data.map((character, index) => (
                <div key={index} className="card-wrapper">
                    <Card value={character} />
                </div>
            ))}
            </div>
        </>
    );
};

export default Content;
