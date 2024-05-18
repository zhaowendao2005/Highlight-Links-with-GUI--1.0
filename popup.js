document.getElementById('highlightButton').addEventListener('click', () => {
    const selector = document.getElementById('selector').value;
    console.log(`Selector: ${selector}`); // 调试信息
    if (selector) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            console.log(`Sending message to tab ${tabs[0].id}`); // 调试信息
            chrome.tabs.sendMessage(tabs[0].id, {selector: selector});
        });
    }
});
