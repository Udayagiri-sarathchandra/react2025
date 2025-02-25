function outest(){
    var c = 20;
    function outer(b){
      let a = 10;
      function inner(){
        console.log(a,b,c);
      }
      return inner;
    } 
    return outer;   
  }
  outest()("hello")(); // calling inner function
  // or
  var close =outest()("hello");
  close();


  function counter(){
    var count = 0;
    return function incCounter(){
        count++;
        console.log(count)
    }
  }
  var counter1=counter();
  counter1();
  counter1();
  counter1();
  var counter2=counter();
  counter2();
  counter2();
  counter2();