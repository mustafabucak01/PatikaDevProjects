let myName=document.querySelector("#myName");
let myNotes=document.querySelector("#myNotes");
let notes={"Pazartesi":"Check-in Toplantısı Günü, Eduflow Yeni Hafta Listesine Bakabilirsin",
		"Salı":"CoderByte Challange Başladı, Ayrıca Mülakat Testini İzleyebilirsin",
		"Çarşamba":"CoderByte Challange Devam Ediyor, Ayrıca English Speaking Club Etkinliği'ne Katılabilirsin",
		"Perşembe":"CoderByte Challange Son Günü 18:00'de Sonlanacak ve Discord'da Soru Çözümleri Yapılacak",
		"Cuma":"Bugün Eduflow Score'lar Açıklanacak",
		"Cumartesi":"Eğitim Videolarını İzlemeye ve Çalışmaya Devam Edebilirsin",
		"Pazar":"Bugün Dinlenebilirsin veya Varsa Eksiğin Tamamlayabilirsin"
	} ;
	
function showTime(){
let name=prompt("Adınız Nedir?");
myName.innerHTML=name;

clock();
}

function clock(){
let today = new Date();
let day = today.toLocaleString('tr-TR', {weekday: 'long'});

myNotes.innerHTML=`Bugün ${notes[day]}`;

let time =today.toLocaleTimeString();
myClock.innerHTML= `${time} ${day}`;
setTimeout(clock,1000);
 }