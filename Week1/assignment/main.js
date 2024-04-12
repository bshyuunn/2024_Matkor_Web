const num = Number(prompt("숫자를 입력하세요!"));

const cnt1 = document.getElementById("cnt1");
const egg1 = document.getElementById("egg1");
const cnt2 = document.getElementById("cnt2");
const egg2 = document.getElementById("egg2");

cnt1.innerHTML = num;
cnt2.innerHTML = num;

let egg_num = [num, num];
const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const hit = (n) => {	
    if(n==1) {
        temp = cnt1;
    } else {
        temp = cnt2;
    }

	if (egg_num[n-1] <= 1) {
        egg_num[n-1] = 0;
        temp.innerHTML = egg_num[n-1];
		alert("성공!");
        return;
	}
    egg_num[n-1]--;	
    temp.style.color = color[Math.floor(((num - egg_num[n-1]) / num) * 7)];
    temp.innerHTML = egg_num[n-1];
};

egg1.addEventListener("click", function() {
    hit(1)
});
egg2.addEventListener("click", function() {
    hit(2)
});