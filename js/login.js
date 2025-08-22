// API 서버 주소 (환경에 맞게 수정)
const API_BASE_URL = "https://your-api-server.com";

document.getElementById("loginBtn").addEventListener("click", async () => {
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("userId -- " + userId.length);

    if ( userId.length > 8 ) 
        { 
            showToast("아이디는 8글자 이하 입니다.","warning");
            showToast("영문으로만 하세요","warning");
        }

    console.log("password -- " + password);

    // if (!userId || !password) {
    //     showToast("아이디와 비밀번호를 입력하세요.","warning");
    //     return;
    // }

    // try {
    //     const response = await fetch(`${API_BASE_URL}/login`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ userId, password })
    //     });

        // if (response.ok) {
        //     const data = await response.json();
        //     // ✅ JWT 토큰 or 사용자 ID 저장
        //     localStorage.setItem("token", data.token);
        //     localStorage.setItem("userId", userId);

            // showToast("로그인 성공!","success");
            // window.location.href = "/index.html"; 
            // 로그인 후 메인으로 이동
        // } else {
        //     alert("로그인 실패. 아이디/비밀번호를 확인하세요.");
        // }
    // } catch (err) {
    //     console.error("❌ 로그인 오류:", err);
    //     showToast("네트워크 오류 발생","error");
    // }
});

// showToast('저장되었습니다!', 'success');
// showToast('오류가 발생했습니다!', 'error');
function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');

  // Tailwind 색상 매핑
  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  toast.className = `toast px-4 py-2 rounded shadow-lg transition 
                     transform duration-300 ease-in-out 
                     ${typeClasses[type] || typeClasses.info}`;
  toast.textContent = message;

  container.appendChild(toast);

  // 일정 시간 후 fade-out
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    setTimeout(() => container.removeChild(toast), 300);
  }, duration);
}