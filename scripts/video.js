document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("unmuted-vid");
  const unmuteBtn = document.getElementById("unmute-button");

  video.addEventListener("loadedmetadata", () => {
    console.log("Видео готово:", video.videoWidth + "x" + video.videoHeight);
  });

  let audioContextCreated = false;

  function createAudioContext() {
    if (audioContextCreated) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    oscillator.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.001);
    audioContextCreated = true;
  }

  unmuteBtn.addEventListener("click", async () => {
    try {
      createAudioContext();

      if (video.paused) {
        video.muted = true;
        await video.play();
      }

      setTimeout(() => {
        video.muted = false;
        console.log("Звук включен. Muted:", video.muted);
        unmuteBtn.style.display = "none";
      }, 300);
    } catch (error) {
      console.error("Ошибка:", error);

      video.muted = false;
      video.play();
    }
  });

  document.body.addEventListener("click", createAudioContext, { once: true });
});
