// BAI 1
function fibo() {
	let so1 = 0,
		so2 = 1,
		c;

	for (let i = 1; i <= 10; i++) {
		c = so1 + so2;
		so1 = so2;
		so2 = c;
		document.write(c + "<br>");
	}
}
// fibo();
document.write("<br>");

// BAI 2
function tinhGiaiThua() {
	let n = +prompt("Nhap so tinh giai thua");
	let total = 1,
		i;
	for (i = 1; i <= n; i++) {
		total *= i;
	}
	document.write(total + "<br>");
}
// tinhGiaiThua();

// BAI 3
let a = "";
let b = "";
let max = 5;
for (let i = a.length; i < max; i++) {
	a += "*";
	document.write(a + "<br>");
}
b = a;
for (let j = b.length; j > 0; j--) {
	b = b.substring(0, j - 1) + "*";
	document.write(b + "<br>");
}
for (let i = 0; i < 5; i++) {
	for (let j = 4 - i; j > 0; j--) {
		document.write("&nbsp;");
	}

	for (let j = 0; j <= i; j++) {
		document.write("*");
	}

	document.write("<br>");
}
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < i; j++) {
		document.write("&nbsp;");
	}

	for (let j = 5 - i; j > 0; j--) {
		document.write("*");
	}

	document.write("<br>");
}

// BAI 4
for (let i = 0; i < 20; i++) {
	document.write("*");
}
document.write("<br>");

for (let i = 0; i < 5; i++) {
	document.write("*");
	for (let j = 0; j < 18; j++) {
		document.write("&nbsp;");
	}
	document.write("*");
	document.write("<br>");
}

for (let i = 0; i < 20; i++) {
	document.write("*");
}
