chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(`Received selector: ${request.selector}`); // 调试信息
    const links = document.querySelectorAll(request.selector);

    links.forEach(link => {
        link.style.backgroundColor = 'yellow'; // 高亮背景颜色为黄色
        console.log(`文本: ${link.textContent}, 链接: ${link.href}`);
    });

    sendResponse({status: 'highlighted', count: links.length});
});
