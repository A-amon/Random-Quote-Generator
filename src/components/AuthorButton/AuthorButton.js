import { Link } from "react-router-dom"
import "./css/AuthorButton.css"

export default function AuthorButton({ author, tag }) {
    return (
        <div className="main__button--author">
            <span className="main__button-name">
                <span className="aria__text">
                    Author's name:
                </span>
                {author}
            </span>
            <span className="main__button-tag">
                <span className="aria__text">
                    Category:
                </span>
                {tag}
            </span>
            <Link className="main__button-link" to={`/author=${author}`}>
                {
                    `View all ${author}'s quotes`
                }
            </Link>
        </div>
    )
}