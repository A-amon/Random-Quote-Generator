import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { getAuthorQuotes, getRandomQuote } from "../../actions/Quotes";
import Loading from "../Loading/Loading";
import Quote from "../Quote/Quote";
import ErrorCard from "../ErrorCard/ErrorCard";
import "./css/AuthorQuotes.css";

export default function AuthorQuotes({ reloadCount }) {
    const [hasError, setHasError] = useState(false)
    const [quotes, setQuotes] = useState([])
    const { author } = useParams()
    const history = useHistory()

    const getQuotes = () => {
        getAuthorQuotes(author)
            .then(data => {
                setQuotes(data)
            })
            .catch(err => {
                setHasError(true)
            })
    }

    useEffect(() => {
        setHasError(false)

        //fetch list of quotes for author XXX
        if (quotes.length === 0) {
            getQuotes()
        }
        else {
            //get new random author
            getRandomQuote()
                .then(data => {
                    setQuotes([])
                    history.push(`/author=${data.quoteAuthor}`)
                    getQuotes()
                })
                .catch(err => {
                    setHasError(true)
                })
        }
    }, [reloadCount])

    return (
        <div className="author">
            <Link className="author__link" to="/">Random Quote</Link>
            <h1>{author}</h1>
            <ul className="author__quotes">
                {
                    quotes.length > 0 ?
                        quotes.map(quote => (
                            <Quote key={quote._id} quote={`“${quote.quoteText}”`} />
                        )) :
                        <Loading text={`Fetching ${author}'s quotes`} />
                }
                {
                    //display error card if hasError === true
                    hasError ?
                        <ErrorCard /> : null
                }
            </ul>
        </div>
    )
}