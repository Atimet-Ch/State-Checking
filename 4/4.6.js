async function fetchData(url) {
    try {
      // รอผลลัพธ์จาก fetch()
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // ตรวจสอบว่าผลลัพธ์คือสถานะที่ถูกต้อง
      if (!response.ok) {
        throw new Error("ไม่สามารถดึงข้อมูลได้");
      }
      const data = await response.json();  // แปลงข้อมูลเป็น JSON
      console.log("Data fetched:", data);
    } catch (error) {
      // จัดการข้อผิดพลาด
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error.message);
    } finally {
      console.log("จบกระบวนการดึงข้อมูล");
    }
  }
  
  // ทดสอบฟังก์ชัน
  fetchData('https://jsonplaceholder.typicode.com/posts');
  