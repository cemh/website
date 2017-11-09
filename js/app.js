(function(){

    //attached to the html
    var app = angular.module('questionBank',[]);

    //attached to the jumbotron div.
    app.controller('QuestionController',function(){
      this.ozellikler= questions;

    });
    app.controller('SecenekController',function(){
      this.ozel= secenekler;

    });
    //if the data is an array you need to use ng-repeat if your data
    //is not an array you do not need to use ng-repeat just write the object.
    var questions = [
      {
        name:'question1',
        bolum:'matematik',
        konu:'geometri',
        altkonu:'ucgenler',
        seviye:'basit',
        imageUrl:'images/kaplanlar.jpg',
        paragraf:'Anadolu kaplanları üçe ayrılır.',
        description:'Resimde görülen kaplanlar kaç adettir ?',
        //for nested loops we need to use directive ng-repeat wont work.
      },

  ];

  var secenekler =[
        {
          name:'3',
          isSelected:'false',
          image:'...',
          text:'...',
          cozum: true,
          cozumtext:'Mükemmel.Resimdeki kaplanlar 3 adettir.',
          cozumresim:'resim1.jpg',
        },
        {
          name:'8',
          isSelected:'false',
          image:'...',
          text:'...',
          cozum: false,
          cozumtext:'Yanlış. Resimdeki kaplanları 8 adet değildir.',
          cozumresim:'resim2.jpg',
        },


  ];



})();
