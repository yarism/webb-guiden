// JavaScript Document
var liveTipsElement;
var liveTips = new Array();
var i = 0;

document.write("<script type='text/javascript' src='external_javascript.js'><\/sc" + "ript>"); 


function initLiveTips() {
	liveTipsElement = document.getElementById("textToChange");
	liveTips[0] = liveTipsElement.innerHTML;
	liveTips[1] = "För liten text? Förstora med ctrl och +  eller förminska med ctrl och - (på mac är det cmd istället för ctrl).";
	liveTips[2] = "Din webbläsare kan hjälpa dig att läsa webbsidor från ett annat språk, testa t.ex. Google Chrome med deras inbyggda översättningsstöd.";
	liveTips[3] = "Genom att använda t.ex. Google Reader kan du samla alla dina nyheter på samma ställe. Istället för att besöka alla så kommer de hem till dig.";
	liveTips[4] = "Wikipedia är utmärkt för att hitta information om nästan vad som helst. Dock kan vem som helst ändra innehållet så det gäller att också ifrågasätta om det som står kan stämma.";
	liveTips[5] = "Med Twitter kan du få korta meddelanden från någon du är intresserad av att följa. Inte helt olikt facebooks statusuppdatering.";
	liveTips[6] = "Om du vill byta webbläsare så kan det vara bra att ta med sig sina bokmärken till den nya webbläsaren. Detta kan du göra genom att exportera bokmärken.";
	liveTips[7] = "Surfar du på samma tråkiga sidor hela tiden? Testa StumbleUpon som hittar nya webbsidor som passar dig!";
	liveTips[8] = "Använd Prisjakt.nu, Pricerunner.se eller Kelkoo.se för att hitta det billigaste priset på den varan du vill ha";
	setInterval(updateTips, 9000);

}
function updateTips() {
	i++;
	if (i >= liveTips.length) {
		i = 0;
}
	liveTipsElement.innerHTML = liveTips[i];
}

