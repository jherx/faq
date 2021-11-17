$(function() {
    var previousA; // 1 2 3 4 5 answer prev
    var previousQ; // question
    var previousI; // Img 'the arrow'
    var previousH; // header

    var question1 = $('#question1');
    var answer1 = $('#answer1');
    var img1 = $('#img1');
    var header1 = $('#header1');

    var question2 = $('#question2');
    var answer2 = $('#answer2');
    var img2 = $('#img2');
    var header2 = $('#header2');

    var question3 = $('#question3');
    var answer3 = $('#answer3');
    var img3 = $('#img3');
    var header3 = $('#header3');

    var question4 = $('#question4');
    var answer4 = $('#answer4');
    var img4 = $('#img4');
    var header4 = $('#header4');

    var question5 = $('#question5');
    var answer5 = $('#answer5');
    var img5 = $('#img5');
    var header5 = $('#header5');
    
    function ChangePreviousValue(question,answer,header,img){
        previousQ = question;
        previousA = answer;
        previousH = header;
        previousI = img;
    }
    function removePrevious(previousAnswer, previousQuestion, previousImg, previousHeader){
        previousAnswer.removeClass('active');
        previousQuestion.removeClass('active');
        previousImg.removeClass('active');
        previousImg.addClass('back');
        previousHeader.removeClass('active');
        previousAnswer.slideUp();
    }
    question1.click(function(){ 
        if($(this).hasClass('active')){
            removePrevious(previousA,previousQ,previousI,previousH);
        }else{
            if(previousA){
                removePrevious(previousA,previousQ,previousI,previousH);
            }
            $(this).addClass('active');
            answer1.addClass('active');
            header1.addClass('active');
            img1.addClass('active');
            answer1.slideDown();
            ChangePreviousValue(question1,answer1,header1,img1);     
        }
        
    });
    question2.click(function(){
        if($(this).hasClass('active')){
            removePrevious(previousA,previousQ,previousI,previousH)
        }else{
            if(previousA){
                removePrevious(previousA,previousQ,previousI,previousH);
            }
            $(this).addClass('active');
            answer2.addClass('active');
            header2.addClass('active');
            img2.addClass('active');
            answer2.slideDown();
            ChangePreviousValue(question2,answer2,header2,img2);     
        }
    });
    question3.click(function(){
        if($(this).hasClass('active')){
            removePrevious(previousA,previousQ,previousI,previousH)
        }else{
            if(previousA){
                removePrevious(previousA,previousQ,previousI,previousH);
            }
            $(this).addClass('active');
            answer3.addClass('active');
            header3.addClass('active');
            img3.addClass('active');
            answer3.slideDown();
            ChangePreviousValue(question3,answer3,header3,img3);     
        } 
    });
    question4.click(function(){
        if($(this).hasClass('active')){
            removePrevious(previousA,previousQ,previousI,previousH)
        }else{
            if(previousA){
                removePrevious(previousA,previousQ,previousI,previousH);
            }
            $(this).addClass('active');
            answer4.addClass('active');
            header4.addClass('active');
            img4.addClass('active');
            answer4.slideDown();
            ChangePreviousValue(question4,answer4,header4,img4);     
        }
    });
    question5.click(function(){
        if($(this).hasClass('active')){
            removePrevious(previousA,previousQ,previousI,previousH)
        }else{
            if(previousA){
                removePrevious(previousA,previousQ,previousI,previousH);
            }
            $(this).addClass('active');
            answer5.addClass('active');
            header5.addClass('active');
            img5.addClass('active');
            answer5.slideDown();
            ChangePreviousValue(question5,answer5,header5,img5);     
        }
    });
    
});