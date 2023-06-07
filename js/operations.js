const quotes = [
    {
        quote: "강한 자가 이기는 것이 아니라, 이긴 자가 강한 것이다.",
        author: "프란츠 베켄바우어",
    },
    {
        quote: "나는 생각한다 고로 나는 존재한다.",
        author: "르네 데카르트",
    },
    {
        quote: "대중들은 작은 거짓말보다 더 큰 거짓말에 쉽게 속는다.",
        author: "아돌프 히틀러",
    },
    {
        quote: "만약 당신이 누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라.",
        author: "에이브러햄 링컨",
    },
    {
        quote: "반성되지 않는 삶은 인간으로서 살 가치가 없다.",
        author: "소크라테스",
    },
    {
        quote: "사람들은 할 말이 없으면 욕을 한다.",
        author: "볼테르",
    },
    {
        quote: "애국심은 사악한 자의 미덕이다.",
        author: "오스카 와일드",
    },
    {
        quote: "잘못된 것을 따져보지 않는 습관에 오래도록 길들여져 있으면 처음에는 잘못된 것을 마치 옳은 것처럼 피상적으로 생각하며, 관습을 강력히 옹호하게 마련이다.",
        author: "토머스 페인",
    },
    {
        quote: "충분히 발달한 과학은 마술과 구분할 수 없다.",
        author: "아서 클라크",
    },
    {
        quote: "트위터는 인생의 낭비.",
        author: "알렉스 퍼거슨",
    },
    {
        quote: "평화적 수단으로밖에 평화를 실현할 수 없다고 생각하는 국가는, 머지않아 다른 국가에게 흡수될 것이다.",
        author: "리처드 닉슨",
    },
    {
        quote: "현명한 자는 보는 걸 믿고 겁쟁이는 믿는 걸 본다.",
        author: "이오시프 스탈린",
    },
];

function executeApp(event) {
    const quote = document.querySelector(".quote span:first-child");
    const author = document.querySelector(".quote span:last-child");
    const target = event.currentTarget.id;
    const app = document.querySelector(`.app.${target}`);

    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = `- ${todaysQuote.author}`;
    app.style.visibility = "visible";
}

function exitApp(event) {
    const target = event.currentTarget.className;
    const app = document.querySelector(`.app.${target}`);
    app.style.visibility = "hidden";
}

function openBrowser() {
    window.open("https://www.naver.com/");
}
