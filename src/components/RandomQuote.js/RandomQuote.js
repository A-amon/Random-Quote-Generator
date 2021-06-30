import { useState, useEffect } from "react"
import Quote from "../Quote/Quote"
import AuthorButton from "../AuthorButton/AuthorButton"
import Loading from "../Loading/Loading"
import { getRandomQuote } from "../../actions/Quotes"
import ErrorCard from "../ErrorCard/ErrorCard"
import "./css/RandomQuote.css"

export default function RandomQuote({ reloadCount }) {
    const [hasError, setHasError] = useState(false)
    const [quote, setQuote] = useState(null)

    //fetch random quote
    useEffect(() => {
        setHasError(false)
        setQuote(null)
        getRandomQuote()
            .then(data => {
                setQuote(data)
            })
            .catch(err => {
                setHasError(true)
            })
    }, [reloadCount])

    return (
        <>
            {
                quote !== null ?
                    <>
                        <Quote quote={`${quote.quoteText}`} />
                        <AuthorButton author={quote.quoteAuthor} tag={quote.quoteGenre} />
                    </> : <Loading text="Fetching random quote" />
            }
            {
                //display error card if hasError === true
                hasError ?
                    <ErrorCard /> : null
            }
        </>
    )
}