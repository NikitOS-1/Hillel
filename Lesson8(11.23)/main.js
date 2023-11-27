//context
// подмена контекста
// //.call()
// person.showName.call(person)
// на месте вызывает функцию / передаем контекст person

// //apply()
// person.showName.apply(person,[]?)
// на месте вызывает функцию /
// передаем контекст person/и передаем массив с параметрами опционально

// //.bind()
// let personShowName = person.showName.bind(person)
// personShowName()
// не вызывает функцию а создает новую

// setTimeout(callback ,1000)
// callback будет ссылаться на window потеряет контекст

// let obj={
//     name:"Nik',
// 	print:function(){
//      hello:function(){
//        console.log(this.name)//будет ссылаться на window // потеря контекста
//      }
//     }
//    }

// у стрелочных функций нет своего this он будет ссылаться на window
