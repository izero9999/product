const translations = {
  en: {
    title: "Welcome to Our Product",
    description: "This product will change the way you work!",
    "buy-button": "Buy Now"
  },
  vi: {
    title: "Chào mừng đến với sản phẩm của chúng tôi",
    description: "Sản phẩm này sẽ thay đổi cách bạn làm việc!",
    "buy-button": "Mua ngay"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}
