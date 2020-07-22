const selectAll = (selector) => {
    return document.querySelectorAll(selector);
}

const select = (selector) => {
    return document.querySelector(selector);
}

const tabs = selectAll('nav li');
tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {      
        for (x of tabs) {
            x.classList.remove('selected');
        }
        e.target.classList.add('selected');
    })
})

console.log(tabs);