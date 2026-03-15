import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function QoutesCard() {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState([]);

    const fetchQuote = async () => {
        try {
            setLoading(true);

            const response = await fetch("https://dummyjson.com/quotes/random");
            const result = await response.json();

            setQuote(result);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="card">
            <div className="card-header">Quotes Generator</div>

            <div className="card-body">
                <div className="quote">
                    {quote.quote}
                </div>

                <div className="author">
                    {quote.author}
                </div>
            </div>

            <button id="newQoutBtn" onClick={fetchQuote}>
                New Quote
            </button>
        </div>
    );
}

export default QoutesCard;