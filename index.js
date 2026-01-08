// 1. สร้างตัวแปรเสียง
const soundEffect = new Audio('metal.mp3'); 

// 2. ฟังก์ชันสำหรับเล่นเสียง (เอาไปใส่ในตอนเก็บไก่)
function playCollectSound() {
    soundEffect.currentTime = 0; // รีเซ็ตเสียงให้เริ่มใหม่ทุกครั้งที่เก็บ
    soundEffect.play().catch(e => console.log("คลิกหน้าจอก่อน 1 ครั้งเพื่อเปิดระบบเสียง"));
}

// 3. วิธีใช้: เรียก playCollectSound(); ในบรรทัดที่นายเขียนโค้ดเก็บไก่สำเร็จ
