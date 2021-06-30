
const API_URL = "https://quote-garden.herokuapp.com"
const API_VERSION = "api/v3"

export function getRandomQuote() {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/${API_VERSION}/quotes/random`)
            .then(res => res.json())
            .then(res => resolve(res.data[0]))
            .catch(error => {
                reject(error)
            })
    })
}

export function getAuthorQuotes(author, page = 1, limit = 5) {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/${API_VERSION}/quotes?author=${author}&page=${page}&limit=${limit}`)
            .then(res => res.json())
            .then(res => resolve(res.data))
            .catch(error => {
                reject(error)
            })
    })
}
