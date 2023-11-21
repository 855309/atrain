var delay = 1;
var digits = 3;
var rounds = 15;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$("#startb").click(() => {
	delay = $("#del-inp").val()
	digits = $("#dig-inp").val()
	rounds = $("#rds-inp").val()
	$(".div-opt").hide();
	start_trainer();
});

$(document).ready(() => {
	$("#del-inp").val(delay);
	$("#dig-inp").val(digits);
	$("#rds-inp").val(rounds);
	$(".div-trn").hide();
	$(".div-ans").hide();
	$(".div-ret").hide();
});

function ndisp(num){
	$(".disp-num").text(num);
}

function nclr(){
	$(".disp-num").text("");
}

function rndnum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const clr_delay = 40;

var nlist = []
var sum = 0;
async function start_trainer(){
	nlist = [];
	sum = 0;
	
	// gen numbers
	for(let i = 0; i < rounds; i++){
		let h = rndnum(10 ** (digits - 1), 10 ** digits);
		sum += h;
		nlist.push(h);
	}

	$(".div-trn").show();
	await sleep(1000);
	
	// countdown
	for (let i = 3; i >= 1; i--){
		ndisp(i);
		await sleep(1000);
	}
	
	nclr();
	await sleep(1000);
	
	for(let i = 0; i < rounds; i++){
		ndisp(nlist[i]);
		await sleep(delay * 1000 - clr_delay);
		nclr();
		await sleep(clr_delay);
	}
	
	nclr();
	
	await sleep(1000);
	
	$(".div-trn").hide();
	$(".div-ans").show();
}

$("#btn-rev").click(() => {
	$("#div-sum").text(sum);
	$("#btn-rev").hide();
	$(".div-ret").show();
});

$("#btn-sagain").click(() => {
	$("#btn-rev").show();
	$(".div-ret").hide();
	$(".div-ans").hide();
	$(".div-trn").show();
	start_trainer();
});

$("#btn-mainm").click(() => {
	$("#btn-rev").show();
	$(".div-ret").hide();
	$(".div-ans").hide();
	$(".div-opt").show();
});
