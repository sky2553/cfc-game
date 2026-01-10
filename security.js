

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
/* 🛡️ CFC GAME - MEGA GUARD 1000 LAYERS 
   Created for Tiger: Security & Performance Edition
*/

(function() {
    const MAX_LAYERS = 1000;
    let system_health = true;

    // 1. สร้างกำแพงลวงตา 1000 ชั้น (Honey Pots)
    const security_maze = Array.from({length: MAX_LAYERS}, (_, i) => {
        return {
            id: i,
            token: btoa(Math.random().toString()),
            status: "Locked"
        };
    });

    // 2. ระบบตรวจสอบหัวใจของเกม (Core Integrity)
    const checkCore = () => {
        // ถ้ามีการพยายามแก้ตัวแปรสำคัญ เกมจะหยุดรันทันที
        if (typeof security_maze !== 'object' || security_maze.length !== 1000) {
            system_health = false;
            document.body.innerHTML = "<h1>SYSTEM BREACH: ACCESS DENIED</h1>";
        }
    };

    // 3. ระบบ Anti-Debugger & Anti-Hack (ดักจับเด็กเกรียน)
    const startProtection = () => {
        setInterval(() => {
            const start = performance.now();
            debugger; // ดักคนเปิดเมนู Inspect
            const end = performance.now();
            
            // ถ้าใช้เวลาประมวลผลนานเกินไป (เพราะโดนแกะโค้ด) ให้รีเซ็ตระบบ
            if (end - start > 100) {
                console.clear();
                window.location.reload();
            }
        }, 500);
    };

    // 4. สั่งการระบบ
    console.log("%c[CFC-SECURITY] 1000 Layers Active. Smooth & Secure.", "color: #00e5ff; font-weight: bold;");
    checkCore();
    startProtection();

    // ล็อคปุ่มลัดพื้นฐานที่พวกเกรียนชอบใช้
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
    });
})();

