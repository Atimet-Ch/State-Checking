fetch('./data.json') // ใช้ ./data.json เพื่อให้ชัดเจนว่าอยู่โฟลเดอร์เดียวกัน
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Loaded Data:', data);
    })
    .catch(error => console.error('Error loading JSON:', error));
