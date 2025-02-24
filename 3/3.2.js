// จัดการเหตุการณ์เพิ่มเติม
const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  heading.style.color = getRandomColor();

});

heading.addEventListener("mouseover", () => {
    heading.classList.add("shake");
  
    // ลบคลาสหลังจาก animation จบเพื่อให้คลิกซ้ำได้
    heading.addEventListener("animationend", () => {
      heading.classList.remove("shake");
    }, { once: true });
  });