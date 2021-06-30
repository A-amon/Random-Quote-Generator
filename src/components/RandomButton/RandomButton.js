import "./css/RandomButton.css"

export default function RandomButton({ onClick }) {
    return (
        <button className="header__button--random" onClick={onClick}>
            random
        </button>
    )
}