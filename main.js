    (function(){
        var btn = document.getElementById('btn');
        var btn2 = document.getElementById('btn2');
        var audio = document.getElementById('audio');
        var btn3 = document.getElementById('btn3');
        var audio2 = document.getElementById('audio2');
        var btn4 = document.getElementById('btn4');
        var btn5 = document.getElementById('btn5');
        var btn6 = document.getElementById('btn6');
        var audio3 = document.getElementById('audio3');
        var btn7 = document.getElementById('btn7');
        var btn8 = document.getElementById('btn8');
        var audio4 = document.getElementById('audio4');
        var btn9 = document.getElementById('btn9');
        var audio5 = document.getElementById('audio5');
        var btn10 = document.getElementById('btn10');
        var btn11 = document.getElementById('btn11');
        var btn12 = document.getElementById('btn12');
        var audio6 = document.getElementById('audio6');
        var btn13 = document.getElementById('btn13');
        var btn14= document.getElementById('btn14');
        var audio7 = document.getElementById('audio7');
        var btn15 = document.getElementById('btn15');
        var btn16 = document.getElementById('btn16');
        var audio8 = document.getElementById('audio8');
        var audio9 = document.getElementById('audio9');
        var audio10 = document.getElementById('audio10');
        var btn17 = document.getElementById('btn17');
        var btn18 = document.getElementById('btn18');
        var btn19 = document.getElementById('btn19');
        var btn20 = document.getElementById('btn20');
        var audio11 = document.getElementById('audio11');
        var btn21 = document.getElementById('btn21');
        var btn22 = document.getElementById('btn22');
        var audio12 = document.getElementById('audio12');
        var btn23 = document.getElementById('btn23');
        var audio13 = document.getElementById('audio13');
        var btn24 = document.getElementById('btn24');
        var audio14 = document.getElementById('audio14');
        var btn25 = document.getElementById('btn25');
        var btn26 = document.getElementById('btn26');
        var btn27 = document.getElementById('btn27');
        var btn28 = document.getElementById('btn28');
        var btn29 = document.getElementById('btn29');
        var btn30 = document.getElementById('btn30');

        btn.addEventListener('click' , function(){
            audio.src='mp/sasami.mp3';
            audio.play();
        
        });

        btn2.addEventListener('click' , function pause (){
            
            audio.pause();
            audio.currentTime = 0;
        });
        
        btn3.addEventListener('click' , function(){
            audio2.src= 'mp/page3.mp3';
            audio2.play();
	    });
        btn4.addEventListener('click' , function pause (){
        	audio2.pause();
        	audio2.currentTime = 0;
        });

        btn5.addEventListener('click' , function(){
            audio3.src='mp/page4.mp3';
            audio3.play();
        });
        btn6.addEventListener('click' , function pause (){
            audio3.pause();
            audio3.currentTime = 0;
        });

        btn7.addEventListener('click' , function(){
            audio4.src='mp/page5.mp3';
            audio4.play();
        });
        btn8.addEventListener('click' , function pause (){
            audio4.pause();
            audio4.curremtTime = 0;
        });
        btn9.addEventListener('click' , function (){
            audio5.src='mp/page6.mp3';
            audio5.play();
        });
        btn10.addEventListener('click' , function pause(){
            audio5.pause();
            audio5.currentTime= 0 ;
        });

        btn11.addEventListener('click' , function(){
            audio6.src='mp/page7.mp3';
            audio6.play();
        });

        btn12.addEventListener('click' , function pause(){
            audio6.pause();
            audio6.crrentTime = 0;
        });
        btn13.addEventListener('click' , function(){
            audio7.src='mp/page8.mp3';
            audio7.play();
        });

        btn14.addEventListener('click' , function pause(){
            audio7.pause();
            audio7.crrentTime = 0;
            
        });

        btn15.addEventListener('click' , function(){
            audio8.src='mp/page9.mp3';
            audio8.play();
        });

        btn16.addEventListener('click' , function pause(){
            audio8.pause();
            audio8.crrentTime = 0;
        });

        btn17.addEventListener('click' , function(){
            audio9.src='mp/Morning.mp3';
            audio9.play();
        });
       
        btn18.addEventListener('click' , function pause(){
            audio9.pause();
            audio9.crrentTime = 0;
        });

        btn19.addEventListener('click' , function(){
            audio10.src='mp/Stuff.mp3';
            audio10.play();
        });

        btn20.addEventListener('click' , function pause(){
            audio10.pause();
            audio10.crrentTime=0;
        
         });
        btn21.addEventListener('click' , function(){
            audio11.src='mp/cursor2.mp3';
            audio11.play();
        });
        btn22.addEventListener('click' , function(){
            audio12.src='mp/warning2.mp3';
            audio12.play();
        });
        btn23.addEventListener('click' , function(){
            audio13.src='mp/menu2.mp3';
            audio13.play();
        });
        btn24.addEventListener('click' , function(){
            audio14.src='mp/cursor3.mp3';
            audio14.play();
        });
        btn25.addEventListener('click' , function(){
            audio15.src='mp/decision10.mp3';
            audio15.play();
        });
        btn26.addEventListener('click' , function(){
            audio16.src='mp/game_swordman-damage2.mp3';
            audio16.play();
        });
        btn27.addEventListener('click' , function(){
            audio17.src='mp/decision29.mp3';
            audio17.play();
        });
        btn28.addEventListener('click' , function(){
            audio18.src='mp/cursor8.mp3';
            audio18.play();
        });
        btn29.addEventListener('click' , function(){
            audio19.src='mp/cursor1.mp3';
            audio19.play();
        });
        btn30.addEventListener('click' , function(){
            audio20.src='mp/game_swordman-attack1.mp3';
            audio20.play();
        });
}());
