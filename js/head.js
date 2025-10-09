fetch("/head.html")
    .then(res => res.text())
    .then(content => {
        document.head.insertAdjacentHTML("beforeend", content);
    });