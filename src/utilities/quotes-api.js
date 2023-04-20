
const BASE_URL = 'https://type.fit/api/quotes';

export default async function getQuote() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author || 'Unknown';
    return { quote, author };
}