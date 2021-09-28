console.log("js file started...");

const btn = document.getElementById("elig-btn");

const domain = "enterprise.therapyfynd.co";

const frame = document.createElement("iframe");
frame.src = `https://${domain}/eligiblity/check`;
frame.style.backgroundColor = "rgb(255, 255, 255)";
frame.style.height = "auto";
frame.style.position = "absolute";
frame.style.top = "50%";
frame.style.left = "50%"
frame.style.zIndex = 99999999;
frame.style.width = "80%";
frame.style.transform = "translate(-50%,-50%)";

const overlay = document.createElement("div");
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(40,51,61,.7)";
overlay.style.position = "absolute";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.zIndex = 99999999;
overlay.style.opacity = 0.7;
overlay.style.width = "100%";
overlay.style.cursor = "pointer";

btn.addEventListener("click", () => {
  console.log("check eligibility btn clicked!");

  overlay.style.display = "unset";
  frame.style.display = "unset";

  document.body.appendChild(overlay);
  document.body.appendChild(frame);
});

overlay.addEventListener("click", () => {
  console.log("check eligibility overlay clicked!");

  overlay.style.display = "none";
  frame.style.display = "none";
});
