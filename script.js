document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("connections");
  const topicLink = document.querySelector(".dinhnghiacoban-topic");
  const subtopicLinks = document.querySelectorAll(".dinhnghiacoban.subtopic a");

  const drawLine = (x1, y1, x2, y2) => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", "black");
      line.setAttribute("stroke-width", "2");
      svg.appendChild(line);
  };

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
        x: rect.left + window.scrollX +rect.width,
        y: rect.top + window.scrollY + rect.height / 2,
    };
  };

  const topicPos = getOffset1(topicLink);

  subtopicLinks.forEach((link) => {
      const subtopicPos = getOffset2(link);
      drawLine(topicPos.x, topicPos.y, subtopicPos.x, subtopicPos.y);
  });
});