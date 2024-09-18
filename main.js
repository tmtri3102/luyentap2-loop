// // BAI 1
// function fibo() {
// 	let so1 = 0,
// 		so2 = 1,
// 		c;

// 	for (let i = 1; i <= 10; i++) {
// 		c = so1 + so2;
// 		so1 = so2;
// 		so2 = c;
// 		document.write(c + "<br>");
// 	}
// }
// // fibo();
// document.write("<br>");

// // BAI 2
// function tinhGiaiThua() {
// 	let n = +prompt("Nhap so tinh giai thua");
// 	let total = 1,
// 		i;
// 	for (i = 1; i <= n; i++) {
// 		total *= i;
// 	}
// 	document.write(total + "<br>");
// }
// // tinhGiaiThua();

// // BAI 3
// let a = "";
// let b = "";
// let max = 5;
// for (let i = a.length; i < max; i++) {
// 	a += "*";
// 	document.write(a + "<br>");
// }
// b = a;
// for (let j = b.length; j > 0; j--) {
// 	b = b.substring(0, j - 1) + "*";
// 	document.write(b + "<br>");
// }
// for (let i = 0; i < 5; i++) {
// 	for (let j = 4 - i; j > 0; j--) {
// 		document.write("&nbsp;");
// 	}

// 	for (let j = 0; j <= i; j++) {
// 		document.write("*");
// 	}

// 	document.write("<br>");
// }
// for (let i = 0; i < 5; i++) {
// 	for (let j = 0; j < i; j++) {
// 		document.write("&nbsp;");
// 	}

// 	for (let j = 5 - i; j > 0; j--) {
// 		document.write("*");
// 	}

// 	document.write("<br>");
// }

// // BAI 4
// for (let i = 0; i < 20; i++) {
// 	document.write("*");
// }
// document.write("<br>");

// for (let i = 0; i < 5; i++) {
// 	document.write("*");
// 	for (let j = 0; j < 18; j++) {
// 		document.write("&nbsp;");
// 	}
// 	document.write("*");
// 	document.write("<br>");
// }

// for (let i = 0; i < 20; i++) {
// 	document.write("*");
// }

// BAI 5
// function compound() {
// 	let init = 1000000; // 1.000.000
// 	let rate = 0.05; // 5%
// 	let months = 12;
// 	let total = init;
// 	for (let i = 1; i <= months; i++) {
// 		total = Math.round(total + total * rate);
// 	}
// 	console.log(`Tổng số tiền sau ${months} tháng là: ${total} VND`);
// }
// compound();

// BAI 6
function white(num) {
	let s = "";
	for (let i = 0; i < num; i++) {
		s += "&nbsp;";
	}
	document.write(s);
}

function black(num) {
	let s = "";
	for (let i = 0; i < num; i++) {
		s += "*";
	}
	document.write(s);
}

function red(num) {
	let s = "";
	s += "<span style='color:red;'>";
	for (let i = 0; i < num; i++) {
		s += "-";
	}
	s += "</span>";
	document.write(s);
}

function enter() {
	document.write("<br>");
}

white(4);
black(3);
white(4);
black(3);
white(4);
enter();

white(2);
black(2);
red(3);
black(1);
white(2);
black(1);
red(3);
black(2);
white(2);
enter();

white(1);
black(1);
red(6);
black(2);
red(6);
black(1);
white(1);
enter();
white(1);
black(1);
red(14);
black(1);
white(1);
enter();

for (let i = 0; i < 4; i++) {
	black(1);
	red(16);
	black(1);
	enter();
}

white(1);
black(1);
red(14);
black(1);
white(1);
enter();

for (let i = 0; i < 8; i++) {
	white(i + 1);
	black(1);
	red(14 - 2 * i);
	black(1);
	white(i + 1);
	enter();
}
