import "./css/Quote.css"

export default function Quote({ quote }) {
    return (
        <li className="quote">
            “{quote}”
        </li>
    )
}