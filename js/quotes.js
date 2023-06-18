const quotes = [
    {
        initial: "ㄱ",
        quote: "강한 자가 이기는 것이 아니라, 이긴 자가 강한 것이다.",
        author: "프란츠 베켄바우어",
    },
    {
        initial: "ㄴ",
        quote: "나는 생각한다 고로 나는 존재한다.",
        author: "르네 데카르트",
    },
    {
        initial: "ㄷ",
        quote: "대중들은 작은 거짓말보다 더 큰 거짓말에 쉽게 속는다.",
        author: "아돌프 히틀러",
    },
    {
        initial: "ㅁ",
        quote: "만약 당신이 누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라.",
        author: "에이브러햄 링컨",
    },
    {
        initial: "ㅂ",
        quote: "반성되지 않는 삶은 인간으로서 살 가치가 없다.",
        author: "소크라테스",
    },
    {
        initial: "ㅅ",
        quote: "사람들은 할 말이 없으면 욕을 한다.",
        author: "볼테르",
    },
    {
        initial: "ㅇ",
        quote: "애국심은 사악한 자의 미덕이다.",
        author: "오스카 와일드",
    },
    {
        initial: "ㅈ",
        quote: "잘못된 것을 따져보지 않는 습관에 오래도록 길들여져 있으면 처음에는 잘못된 것을 마치 옳은 것처럼 피상적으로 생각하며, 관습을 강력히 옹호하게 마련이다.",
        author: "토머스 페인",
    },
    {
        initial: "ㅊ",
        quote: "충분히 발달한 과학은 마술과 구분할 수 없다.",
        author: "아서 클라크",
    },
    {
        initial: "ㅌ",
        quote: "트위터는 인생의 낭비.",
        author: "알렉스 퍼거슨",
    },
    {
        initial: "ㅍ",
        quote: "평화적 수단으로밖에 평화를 실현할 수 없다고 생각하는 국가는, 머지않아 다른 국가에게 흡수될 것이다.",
        author: "리처드 닉슨",
    },
    {
        initial: "ㅎ",
        quote: "현명한 자는 보는 걸 믿고 겁쟁이는 믿는 걸 본다.",
        author: "이오시프 스탈린",
    },
];

const quoteDiv = document.querySelector(".quote");
const quoteSpan = quoteDiv.querySelector("span:nth-child(2)");
const authorSpan = quoteDiv.querySelector("span:last-child");

const randomQuote = () => {
    const nowQuoteInitial = quoteDiv.getAttribute("name");
    const chosenQuotes = quotes.filter(
        (quote) => quote.initial !== nowQuoteInitial
    );
    const chosenQuote =
        chosenQuotes[Math.floor(Math.random() * chosenQuotes.length)];
    quoteSpan.innerText = chosenQuote.quote;
    authorSpan.innerText = `- ${chosenQuote.author}`;
    quoteDiv.setAttribute("name", chosenQuote.initial);
};

randomQuote();
quoteDiv.addEventListener("dblclick", randomQuote);
