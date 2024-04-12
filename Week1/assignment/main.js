const num = Number(prompt("숫자를 입력하세요!"));

const cnt1 = document.getElementById("cnt1");
const egg1 = document.getElementById("egg1");

cnt1.innerHTML = num;

let egg_num = num;
const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const hit = () => {	
	if (egg_num <= 1) {
        egg_num = 0;
        cnt1.innerHTML = egg_num;
		alert("성공!");
        return;
	}
    egg_num--;	
    cnt1.style.color = color[Math.floor(((num - egg_num) / num) * 7)];
    cnt1.innerHTML = egg_num;
};

egg1.addEventListener("click", hit);
