const quotes = [
    {
        text: "生活中最重要的不是位置，而是方向。",
        author: "奥利弗·温德尔·霍姆斯"
    },
    {
        text: "人生就像一面镜子，你对它笑，它就对你笑；你对它哭，它就对你哭。",
        author: "萨克雷"
    },
    {
        text: "时间是一切财富中最宝贵的财富。",
        author: "德奥弗拉斯多"
    },
    {
        text: "把时间用在思考上是最能节省时间的事情。",
        author: "卡曾斯"
    },
    {
        text: "行动是治愈恐惧的良药。",
        author: "威廉·詹姆斯"
    },
    {
        text: "教育的目的不是填满一桶水，而是点燃一把火。",
        author: "叶芝"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `—— ${quote.author}`;
}

// 页面加载时显示第一条名言
getRandomQuote(); 