// 요소 선택
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

// 열기
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// 닫기
function closeModal() {
  modal.classList.add("hidden");
}

closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// 확인 버튼 동작
confirmBtn.addEventListener("click", () => {
  alert("✅ 확인 버튼 클릭됨!");
  closeModal();
});

// 배경 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
