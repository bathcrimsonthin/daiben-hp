const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// ==========================================
// FAQ アコーディオン開閉処理
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const faqToggles = document.querySelectorAll(".js-faq-toggle");

  faqToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector(".faq-answer");

      // 開閉状態の切り替え
      if (faqItem.classList.contains("is-open")) {
        faqItem.classList.remove("is-open");
        answer.style.maxHeight = null;
      } else {
        faqItem.classList.add("is-open");
        // 子要素の高さを取得してスムーズに開く
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});