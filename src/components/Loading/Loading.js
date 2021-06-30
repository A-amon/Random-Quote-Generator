import "./css/Loading.css"

export default function Loading({ text }) {
    return (
        <div className="loading">
            <span>
                {text}...
            </span>
        </div>
    )
}