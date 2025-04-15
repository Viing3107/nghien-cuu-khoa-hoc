document.addEventListener("DOMContentLoaded", () => {
    const getOffset1 = (element) => {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + window.scrollX,
            y: rect.top + window.scrollY + rect.height / 2,
        };
    };

    const getOffset2 = (element) => {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + window.scrollX + rect.width,
            y: rect.top + window.scrollY + rect.height / 2,
        };
    };
    
    const drawLine = (x1, y1, x2, y2, svg) => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
    };
    let svg, topicLink, subtopicLinks, topicPos, subtopicPos;
    
    svg = document.querySelector(".dinhnghiacoban-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".dinhnghiacoban-topic");
    subtopicLinks = document.querySelectorAll(".dinhnghiacoban-subtopic a");
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".bruteforce-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".bruteforce-topic");
    subtopicLinks = document.querySelectorAll(".bruteforce-subtopic a");
    topicPos = getOffset2(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset1(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".array-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".array-topic");
    subtopicLinks = document.querySelectorAll(".array-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".sort-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".sapxep-topic");
    subtopicLinks = document.querySelectorAll(".sort-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset2(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset1(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".search-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".timkiem-topic");
    subtopicLinks = document.querySelectorAll(".search-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".sohoc-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".sohoc-topic");
    subtopicLinks = document.querySelectorAll(".sohoc-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset2(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset1(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".container-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".container-topic");
    subtopicLinks = document.querySelectorAll(".container-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".graph-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".dothi-topic");
    subtopicLinks = document.querySelectorAll(".graph-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset2(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset1(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".datastructure-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".cautrucdulieu-topic");
    subtopicLinks = document.querySelectorAll(".datastructure-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".dp-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".quyhoachdong-topic");
    subtopicLinks = document.querySelectorAll(".dp-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset2(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset1(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    svg = document.querySelector(".tree-edge");
    svg.setAttribute("width", document.documentElement.scrollWidth);
    svg.setAttribute("height", document.documentElement.scrollHeight);
    topicLink = document.querySelector(".cay-topic");
    subtopicLinks = document.querySelectorAll(".tree-subtopic a");
    console.log(subtopicLinks);
    topicPos = getOffset1(topicLink);
    subtopicLinks.forEach((link) => {
        subtopicPos = getOffset2(link);
        drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y, svg);
    });

    
});