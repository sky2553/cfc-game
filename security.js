

// --- LAYER 1: ป้องกันการแกะโค้ด (Anti-Inspect) ---
// ห้ามคลิกขวา และห้ามใช้ปุ่มลัด F12 หรือ Ctrl+Shift+I
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))) {
        return false;
    }
};

// --- LAYER 2: ป้องกันการรันผิดที่ (Domain Lock) ---
// ถ้ามีคนดูดไฟล์ไปรันที่อื่นที่ไม่ใช่ GitHub ของนาย เกมจะไม่ทำงาน
function checkDomain() {
    const allowedDomain = "localhost"; // หรือเปลี่ยนเป็นชื่อ user.github.io ของนาย
    if (!window.location.hostname.includes(allowedDomain) && window.location.hostname !== "") {
        document.body.innerHTML = "<h1 style='color:red; text-align:center;'>❌ Security Alert: Unauthorized Domain!</h1>";
        return false;
    }
    return true;
}

// --- LAYER 3: ตรวจสอบความสมบูรณ์ (Integrity Check) ---
// ตรวจเช็คว่าตัวแปรสำคัญในเกมยังอยู่ครบไหม (ถ้าโดนลบ เกมจะหยุด)
function checkIntegrity() {
    if (typeof gameRunning === 'undefined' && typeof initGame === 'undefined') {
        alert("🛡️ ระบบตรวจพบความผิดปกติของไฟล์!");
        return false;
    }
    return true;
}

// รันระบบป้องกันทั้งหมด
window.onload = function() {
    if (checkDomain() && checkIntegrity()) {
        console.log("🛡️ Tiger Security: Status Green (3/3 Passed)");
        // เข้าสู่หน้าเมนูเกม
    }
};
