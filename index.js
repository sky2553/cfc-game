

// 1. ระบบจัดการเสียง (อัปเดต 8 ม.ค. 2569)
const tingSound = new Audio('ting.mp3'); // ไฟล์เสียงติ๊งๆ ของนาย
tingSound.volume = 0.5; // ปรับความดังให้พอดี ไม่ให้ผู้เล่นตกใจ

// 2. ฟังก์ชันตรวจสอบการชน (Collision) และเก็บไอเทมแบบปลอดภัย
function handleChickenCollection(player, chicken) {
    // [Security Check] ตรวจสอบว่ามีตัวตนอยู่จริงและยังไม่ถูกเก็บ
    if (chicken && !chicken.isCollected) {
        
        // เช็คระยะห่าง (2D Collision Check)
        const dist = Math.hypot(player.x - chicken.x, player.y - chicken.y);
        
        if (dist < 30) { // ถ้าอยู่ใกล้กันในระยะ 30 pixels
            chicken.isCollected = true; // ล็อกสถานะทันที (ป้องกัน Bug เก็บซ้ำ)
            
            // เล่นเสียงติ๊งๆ
            tingSound.play().catch(e => console.warn("ต้องมีการคลิกหน้าจอก่อน 1 ครั้งเพื่อให้เสียงเล่นได้"));
            
            // อัปเดตแพตช์: ลบตัวไก่ออกจากอาเรย์หรือหน้าจอ
            chicken.visible = false; 
            
            console.log("Update: Chicken collected with security patch!");
        }
    }
}
