function initDesktopSlider() {
  const container = document.querySelector(".scroll-container");
  const btnLeft = document.querySelector(".control-btn-left");
  const btnRight = document.querySelector(".control-btn-right");
  const images = container.querySelectorAll("img");

  const getScrollStep = () => {
    const firstImg = container.querySelector("img");
    if (!firstImg) return 0;

    const gapValue = getComputedStyle(container).gap;
    const gap = parseInt(gapValue) || 0;

    return firstImg.clientWidth + gap;
  };

  btnRight.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nextImage;

    for (const img of images) {
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter > containerCenter + 10) {
        nextImage = img;
        break;
      }
    }

    if (nextImage) {
      const targetPos =
        nextImage.offsetLeft -
        (container.clientWidth - nextImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  btnLeft.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let prevImage;

    for (let i = images.length - 1; i >= 0; i--) {
      const img = images[i];
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter < containerCenter - 10) {
        prevImage = img;
        break;
      }
    }

    if (prevImage) {
      const targetPos =
        prevImage.offsetLeft -
        (container.clientWidth - prevImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  container.addEventListener("scroll", () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    btnLeft.style.visibility = container.scrollLeft > 10 ? "visible" : "hidden";
    btnRight.style.visibility =
      container.scrollLeft < maxScroll - 10 ? "visible" : "hidden";
  });

  window.addEventListener("load", () => {
    container.dispatchEvent(new Event("scroll"));
    btnLeft.style.visibility = "hidden";
  });
}

function initMobileSlider1() {
  const container = document.querySelector(".mobile-scroll-container-2");
  const btnLeft = document.querySelector(".mobile-control-btn-left-2");
  const btnRight = document.querySelector(".mobile-control-btn-right-2");
  const images = container.querySelectorAll("img");

  const getScrollStep = () => {
    const firstImg = container.querySelector("img");
    if (!firstImg) return 0;

    const gapValue = getComputedStyle(container).gap;
    const gap = parseInt(gapValue) || 0;

    return firstImg.clientWidth + gap;
  };

  btnRight.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nextImage;

    for (const img of images) {
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter > containerCenter + 10) {
        nextImage = img;
        break;
      }
    }

    if (nextImage) {
      const targetPos =
        nextImage.offsetLeft -
        (container.clientWidth - nextImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  btnLeft.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let prevImage;

    for (let i = images.length - 1; i >= 0; i--) {
      const img = images[i];
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter < containerCenter - 10) {
        prevImage = img;
        break;
      }
    }

    if (prevImage) {
      const targetPos =
        prevImage.offsetLeft -
        (container.clientWidth - prevImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  container.addEventListener("scroll", () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    btnLeft.style.visibility = container.scrollLeft > 10 ? "visible" : "hidden";
    btnRight.style.visibility =
      container.scrollLeft < maxScroll - 10 ? "visible" : "hidden";
  });

  window.addEventListener("load", () => {
    container.dispatchEvent(new Event("scroll"));
    btnLeft.style.visibility = "hidden";
  });
}

function initMobileSlider2() {
  const container = document.querySelector(".mobile-scroll-container-1");
  const btnLeft = document.querySelector(".mobile-control-btn-left-1");
  const btnRight = document.querySelector(".mobile-control-btn-right-1");
  const images = container.querySelectorAll("img");

  const getScrollStep = () => {
    const firstImg = container.querySelector("img");
    if (!firstImg) return 0;

    const gapValue = getComputedStyle(container).gap;
    const gap = parseInt(gapValue) || 0;

    return firstImg.clientWidth + gap;
  };

  btnRight.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nextImage;

    for (const img of images) {
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter > containerCenter + 10) {
        nextImage = img;
        break;
      }
    }

    if (nextImage) {
      const targetPos =
        nextImage.offsetLeft -
        (container.clientWidth - nextImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  btnLeft.addEventListener("click", () => {
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let prevImage;

    for (let i = images.length - 1; i >= 0; i--) {
      const img = images[i];
      const imgCenter = img.offsetLeft + img.clientWidth / 2;
      if (imgCenter < containerCenter - 10) {
        prevImage = img;
        break;
      }
    }

    if (prevImage) {
      const targetPos =
        prevImage.offsetLeft -
        (container.clientWidth - prevImage.clientWidth) / 2;

      container.scrollTo({
        left: targetPos,
        behavior: "smooth",
      });
    }
  });

  container.addEventListener("scroll", () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    btnLeft.style.visibility = container.scrollLeft > 10 ? "visible" : "hidden";
    btnRight.style.visibility =
      container.scrollLeft < maxScroll - 10 ? "visible" : "hidden";
  });

  window.addEventListener("load", () => {
    container.dispatchEvent(new Event("scroll"));
    btnLeft.style.visibility = "hidden";
  });
}

window.addEventListener("load", () => {
  initDesktopSlider();
  initMobileSlider1();
  initMobileSlider2();
});
