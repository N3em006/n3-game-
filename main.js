/*<clock>*/
const digSec = document.querySelector('.seconds')
const digMin = document.querySelector('.minutes')
const digHour = document.querySelector('.hours')
const digAmpm = document.querySelector('.ampm')
const date = new Date();

setInterval(loop);

function loop() {
    const date = new Date();
    ds = date.getSeconds();
    dm = date.getMinutes();
    dh = date.getHours();

    let ap;
    if (dh < 12) {
        ap = 'AM';
    } else {
        ap = 'PM';
    }
    if (dh == 0) {
        dh = 12;
    }
    if (dh > 12) {
        dh -= 12;
    }
    if (ds < 10) {
        ds = '0' + ds;
    }
    if (dm < 10) {
        dm = '0' + dm;
    }
    if (dh < 10) {
        dh = '0' + dh;
    }

    digSec.innerHTML = ds
    digMin.innerHTML = dm
    digHour.innerHTML = dh
    digAmpm.innerHTML = ap
}

loop();
/*</clock>*/






        var
            div1 = document.getElementById("dv1"),
            area1 = document.getElementById("area1"),
            area2 = document.getElementById("area2"),
            bu_send = document.getElementById("bu-send"),
            input = document.getElementById("input"),
            body1 = document.getElementById("body1"),
            Time = document.getElementById("Time");
const time = digSec.value + digMin.value + digHour.value + digAmpm.vale;

        function speak() {
            var cos = Math.tanh;
            var sin = Math.sign;
            /*<Name>*/
            if (input.value == `What's your name`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';

                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }

            if (input.value == `Whats your name`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `what's your name`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `whats your name`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `WHAT'S YOUR NAME`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `WHATS YOUR NAME`) {
                area1.value = `I'm NEMO chat Boot`;
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "I'm NEMO chat Boot";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            /*</Name>*/

            /*<Hello>*/
            if (input.value == 'Hello') {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
    
}
            if (input.value == `Hallo`) {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `hello`) {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `hallo`) {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `HELLO`) {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `HALLO`) {
                area1.value = 'Hello Can I Help You';
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Hello Can I Help You";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            /*</Hello>*/

            /*<Youtube>*/
            if (input.value == `Youtube`) {
                area1.value = "Open YouTube Now" + window.open("https://Youtube.com");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Open YouTube Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `youTube`) {
                area1.value = "Open YouTube Now" + window.open("https://Youtube.com");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Open YouTube Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            if (input.value == `YOUTUBE`) {
                area1.value = "Open YouTube Now" + window.open("https://Youtube.com");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Open YouTube Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
            }
            /*</Youtube>*/

            /*<Call>*/
            if (input.value == 'Call') {
                area1.value ="Ok" + window.open("tel:");
                input.value = '';
                const audio = document.getElementById('audio');
                
                                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                                const speech = new SpeechSynthesisUtterance();
                                speech.lang = 'en-SA';
                                speech.text = "Ok";
                
                                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                                speechSynthesis.speak(speech);
                                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                                audio.play();
            }
            if (input.value == 'call') {
                area1.value ="Ok" + window.open("tel:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
            }
            if (input.value == 'CALL') {
                area1.value ="Ok" + window.open("tel:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
            }
            /*</Call>*/

            /*<Message>*/
            if (input.value == 'Message') {
                area1.value ="Ok Now" + window.open("sms:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();
                
            }
            if (input.value == 'message') {
                area1.value ="Ok Now" + window.open("sms:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
            }
            if (input.value == 'MESSAGE') {
                area1.value ="Ok Now" + window.open("sms:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
            }
            /*</Message>*/

            /*<Email>*/
            if (input.value == 'Email') {
                area1.value ="Ok I'm Opening Now" + window.open("Mailto:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok I'm Opening Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
                
                
            }
            if (input.value == 'email') {
                area1.value ="Ok I'm Opening Now" + window.open("Mailto:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok I'm Opening Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
                            }
            if (input.value == 'EMAIL') {
                area1.value ="Ok I'm Opening Now" + window.open("Mailto:");
                input.value = '';
                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'en-SA';
                speech.text = "Ok I'm Opening Now";

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();            
                
                            }
            /*</Email>*/

            /*<WhatsApp>*/
            if (input.value == 'WhatsApp') {
                area1.value =" Open WhatsApp Now" + window.open("http://wa.me/0");
                input.value = ''
            }
            if (input.value == 'Whatsapp') {
                area1.value =" Open WhatsApp Now" + window.open("http://wa.me/0");
                input.value = ''
            }
            if (input.value == 'whatsApp') {
                area1.value =" Open WhatsApp Now" + window.open("http://wa.me/0");
                input.value = ''
            }
            if (input.value == 'whatsapp') {
                area1.value =" Open WhatsApp Now" + window.open("http://wa.me/0");
                input.value = ''
            }
            if (input.value == 'WHATSAPP') {
                area1.value =" Open WhatsApp Now" + window.open("http://wa.me/0");
                input.value = ''
            }
            /*</WhatsApp>*/

            /*<Google>*/
            if (input.value == 'Google') {
                area1.value = window.open("http://google.com");
                input.value = ''

            }
            if (input.value == 'google') {
                area1.value = window.open("http://google.com");
                input.value = ''

            }
            if (input.value == 'GOOGLE') {
                area1.value = window.open("http://google.com");
                input.value = ''

            }
            /*</Google>*/

            /*<Time>*/
            if (input.value == 'time') {
                area1.value ='الساعة الآن  ' + dh + ':' + dm 
                input.value = '';
                const audio = document.getElementById('audio');
                
                                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                                const speech = new SpeechSynthesisUtterance();
                                speech.lang = 'Ar-SA';
                                speech.text = area1.value;
                
                                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                                speechSynthesis.speak(speech);
                                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                                audio.play();
            }
            /*</Time>*/

            /*<Music>*/
            if (input.value == 'Music') {
                area1.value = window.open("Samsung Music.apk");
                input.value = ''
            }
            if (input.value == 'music') {
                area1.value = window.open("Samsung Music.apk");
                input.value = ''
            }
            if (input.value == 'MUSIC') {
                area1.value = window.open("Samsung Music.apk");
                input.value = ''
            }
            /*</Music>*/
            if (input.value=='مين هيكسب في ماتش الريال و السيتي') {
                area1.value = 'اتوقع ريال مدريد يكسب المباراة نظرا لنتائج ريال مدريد السابقة في دور نصف النهائي للبطولة';
;

                const audio = document.getElementById('audio');
                
                                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                                const speech = new SpeechSynthesisUtterance();
                                speech.lang = 'Ar-SA';
                                speech.text = 'اتوقع ريال مدريد يكسب المباراة نظرا لنتائج ريال مدريد السابقة في دور نصف النهائي للبطولة';
                
                                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                                speechSynthesis.speak(speech);
                                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                                audio.play();
            }
            

              
var x = (area2.value[1]);
            if (input.value=='احسب') {
                area1.value = area2.value +'='+ eval(area2.value);
                

                const audio = document.getElementById('audio');
                
                                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                                const speech = new SpeechSynthesisUtterance();
                                speech.lang = 'Ar-SA';
                                speech.text = area1.value;
                
                                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                                speechSynthesis.speak(speech);
                                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                                audio.play();
                                
            }



            if (input.value == 'W') {
                area1.value = area2.value;


                const audio = document.getElementById('audio');

                // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'Tr-SA';
                speech.text = area1.value;

                // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                speechSynthesis.speak(speech);
                audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                audio.play();

            }
            
            
            
            if (input.value == 'توقعاتك لي ماتش الاهلي و الوداد يا حج نيمو') {
                            area1.value = 'أتوقع الأهلي المصري يكسب الماتش الأول لأنه في القاهرة و الماتش الثاني أتوقع التعادل و الأهلي يكسب البطولة';
            
            
                            const audio = document.getElementById('audio');
            
                            // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                            const speech = new SpeechSynthesisUtterance();
                            speech.lang = 'Ar-SA';
                            speech.text = area1.value;
            
                            // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                            speechSynthesis.speak(speech);
                            audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                            audio.play();

                        }
                        
                        
            if (input.value == 'A') {
                                        area1.value = area2.value;
                        
                        
                                        const audio = document.getElementById('audio');
                        
                                        // إنشاء كائن SpeechSynthesisUtterance وتعيين خصائصه
                                        const speech = new SpeechSynthesisUtterance();
                                        speech.lang = 'Ar-SA';
                                        speech.text = area1.value;
                        
                                        // تشغيل عملية تحويل النص إلى كلام وتشغيل الصوت
                                        speechSynthesis.speak(speech);
                                        audio.src = URL.createObjectURL(new Blob([new Uint8Array(new Float32Array([0, 0, 0, 0]).buffer)]));
                                        audio.play();
                        
                                    }
                        
            
        }
