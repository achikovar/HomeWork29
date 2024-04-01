// დავალება 7.1
// შექმენით ობიექტი გასაღებებით 1-დან 12-მდე და თვეების დასახელებების მნიშვნელობებით. მიღებული
// ობიექტი კონსოლზე გამოიტანეთ.


//  let obj = {
//     1 : 'იანვარი',
//     2 : 'თებერვალი',
//     3 : 'მარტი',
//     4 : 'აპრილი',
//     5 : 'მაისი',
//     6 : 'ივნისი',
//     7 : 'ივლისი',
//     8 : 'აგვისტო',
//     9 : 'სექტემბერი',
//     10 : 'ოქტომბერი',
//     11 : 'ნოემბერი',
//     12 : 'დეკემბერი'
// }

// console.log(obj) 



// დავალება 7.2
// შექმენით ობიექტი person, რომლის გასაღებები იქნება 'სახელი', 'გვარი' და 'გენდერი'. მათი მნიშვნელობები
// თქვენ თვითონ განსაზღვრეთ. ეკრანზე გამოიტანეთ სახელი გვარის და გენდერის მნიშვნელობები ერთ
// სტრინგში. სიტყვები ერთმანეთს დააცილეთ და გენდერი ფრჩხილებში ჩასვით.
// მაგ: 'ნატო შონია (მდედრობითი)'


// let person = {
//     სახელი : 'აჩიკო' ,
//     გვარი : 'ბერიძე',
//     გენდერი : 'მამრ'
// }

// document.write(`${person.სახელი} ${person.გვარი} (${person.გენდერი})`)



// დავალება 7.3
// შექმენით ობიექტი date, რომლის გასაღებები იქნება day, month და year. მათ მნიშვნელობებად მიმდინარე
// თარიღი განსაზღვრეთ. ეკრანზე გამოიტანეთ ეს თარიღი.


/* let date = {
    day : 29,
    month : 'March',
    year : 2024
}

console.log(date) */



// წარმოდგენილ კოდში აღმოაჩინეთ შეცდომა:

// let obj = {
//     key11: 'მნიშვნელობა1', 
//     key8: 'მნიშვნელობა2', 
//     key4: 'მნიშვნელობა3'
// };


// წარმოდგენი კოდში რომელ გასაღებს არ სჭირდება ბრჭყალებში ჩასმა?
// let obj = {
//     '9name' : 10,
//     key7 : 20,
//     'a-b': 30,
//     'city 10': 40,
//     city10: 50
// };



// მოცემულია ობიექტი products. ამ ობიექტის ყველა ელემენტი, რომლის მნიშვნელობაა 'მარწყვი' შევცვალოთ
// მნშვნელობით 'ალუბალი'.


// let products = {
//     pr1: 'ბანანი',
//     pr2: 'მარწყვი',
//     pr3: 'მსხალი',
//     pr4: 'მარწყვი',
//     pr5: 'ატამი',
//     pr6: 'საზამთრო',
//     pr7: 'მარწყვი'
// }

// function replaceValue(products) {
//     for (let key in products) {
//       if (products[key] === 'მარწყვი') {
//         products[key] = 'ალუბალი';
//       }
//     }
//   }

//   replaceValue(products)

// console.log(products)



// დავალება 7.7
// მოცემულია ობიექტი car. კონსოლზე გამოიტანეთ ამ ობიექტის მწარმოებელი (manufacturer) და ფერი. 

// const car = {
//     model: {
//     manufacturer: "BMW",
//     mark: "X6"
//     },
//     color: "black",
//     is_left_hand_drive: false,
//     number_of_doors: 5
//    };

//    console.log(car.model.manufacturer)


// დავალება 7.8
// წინა დავალებაში მოცემული car ობიექტის ფერი შეცვალეთ "white"-თი, ხოლო მარჯვენასაჭიანობა შეცვალეთ
// მარცხენასაჭიანობით.


// const car = {
//     model: {
//     manufacturer: "BMW",
//     mark: "X6"
//     },
//     color: "black",
//     is_left_hand_drive: false,
//     number_of_doors: 5
//    };

//    car.color = 'white'
//    car.is_left_hand_drive = true

//    console.log(car)


// დავალება 7.9
// მოცემული ობიექტის ყველა ელემენტის მნიშვნელობა აახარისხეთ კვადრატში.


// let obj = {
//     a: 7, 
//     b: 8, 
//     c: 9
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
//   multiplyNumeric(obj)

// console.log(obj)




// დავალება 7.10
// მოცემულია ობიექტი book. კონსოლზე ჯერ გამოიტანეთ ამ ობიექტის გასაღებების მასივი, შემდეგ ამ ობიექტის
// მნიშვნელობების მასივი.

// const book = {
//  title: "JavaScript: The Definitive Guide",
//  author: "David Flanagan",
//  publisher: "O'Reilly Media",
//  year_of_publication: 2011
// };


// console.log(Object.keys(book))
// console.log(Object.values(book))





// დავალება 7.11
// მოცემულია ორი ობიექტი book და year. ოპერატორი ... spread–ის საშუალებით გააერთიანეთ ეს ორი ობიექტი
// ერთ ობიექტში mergeBook –ში და გამოიტანეთ კონსოლზე.


// const book = {
//  title: "JavaScript: The Definitive Guide",
//  author: "David Flanagan"
// };
// const year = {
//  year_of_publication: 2011
// };

// const total = {
//     ...book,
//     ...year
// };


// console.log(total)



// დავალება 7.12
// მოცემულია ობიექტი user. დესტრუქტურიზაციით (destructuring of objects) გამოაცხდეთ ცვლადები username და
// password და კონსოლზე გამოიტანეთ მათი მნიშვნელობები.

// const user = {
//  userName : "superadmin",
//  password: "Godzilla"
// }

// let username = user.userName
// let password = user.password

// console.log(username,password)




// დავალება 7.13
// დაწერეთ ისრული ფუნქცია canEnrollToCourse, რომელსაც გადაეცემა ობიექტი student, (სტუდენტის სახელი და
// გადახდილი თანხა). ფუნქციამ უნდა დააბრუნოს true თუ გადახდილი თანხა 1125 ლარის ტოლია ან მეტია.
// წინააღმდეგ შემთხვევაში უნდა დააბრუნოს false.

// const student = {
//  studentName : "პეტრე მგელაძე",
//  paydVolum: 700
// }

// let canEnrollToCourse = (student) => {
//     if(student >= 1125){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// canEnrollToCourse(student.paydVolum)



// დავალება 7.14
// დაწერეთ ისრული ფუნქცია getTotalAmount, რომელსაც გადაეცემა ობიექტი purchases. ფუნქციამ უნდა
// დააბრუნოს გადახდილი თანხების ჯამი.

// const purchases = {
//  foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
//  amountPaid: [4, 6, 4, 12, 15],
//  date: "27/11/2021"
// };


// let getTotalAmount = (purchases) => {
//     let sum = 0;
//     for (let i = 0; i < purchases.amountPaid.length; i++) {
//       sum += purchases.amountPaid[i];
//     }
//     console.log(sum);
// }

//  console.log(getTotalAmount(purchases))




// დავალება 7.15
// დაწერეთ ისრული ფუნქცია getFullModelOfCar, რომელსაც გადაეცემა car ობიექტი და დააბრუნებს
// ავტომობილის მოდელის სრულ დასახელებას manufacturer.name-ისა და model-ის გათვალისწინებით.

// const car = {
//     manufacturer: {
//         name: "BMW",
//         location: "Munich, Germany",
//         year_of_establish: 1916
//     },
//     model: "X6",
//     color: "black",
//     is_left_hand_drive: false,
//     number_of_doors: 5
// };

// let getFullModelOfCar = (car) => {
//     console.log(car.manufacturer.name, car.model)
// }

// getFullModelOfCar(car)



// დავალება 7.16
// დაწერეთ ფუნქცია getTotalPrice, რომელიც დააბრუნებს ობიექტი purchases-ის საყიდლების ჯამურ ფასს.


// const purchases = [{
//  item: "hammer",
//  price: 22
// },
// {
//  item: "screwdriver",
//  price: 17
// },
// {
//  item: "nails",
//  price: 8
// }]

// let getTotalPrice = (purchases) => {
//     let sum = 0;
//         for (let i = 0; i < purchases.length; i++) {
//           sum += purchases[i].price;
//         }
//         console.log(sum);
//     }

// getTotalPrice(purchases)




// დავალება 7.17
// დაწერეთ ფუნქცია getAveragePrice, რომელიც დააბრუნებს ობიექტი purchases-ის (წინა დავალების მიხედვით)
// საყიდლების საშუალო ფასს.



// const purchases = [{
//  item: "hammer",
//  price: 22
// },
// {
//  item: "screwdriver",
//  price: 17
// },
// {
//  item: "nails",
//  price: 8
// }]

// let getTotalPrice = (purchases) => {
//     let sum = 0;
//     let avr = 0
//         for (let i = 0; i < purchases.length; i++) {
//           sum += purchases[i].price;
//         }
//         avr = sum / purchases.length
//         console.log(avr.toFixed())
//     }
    

// getTotalPrice(purchases)




// დავალება 7.18
// შექმენით პროდუქტის ობიექტი product, რომელსაც ექნება შემდეგი თვისებები: weight, quantity, price, photo.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის ყველა key.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის ყველა value.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის key და value ერთად. 


// const product = {
//     weight : 100,
//     quantity : 10,
//     price : 50,
//     photo : ''
// }

// for (let key in product){
//     document.write(key + '<br>')
// }

// for (let volue in product){
//     document.write(product[volue] + '<br>')
// }

// for (let key in product){
//     document.write(key + ' ' + product[key] + '<br>')
// }



// დავალება 7.19
// მოცცმულია ობიექტი person. გადაწერეთ ეს ობიექტი და დაუმატეთ მეთოდი sayHello, რომელიც ეკრანზე
// გამოიტანს სტრინგს 'გამარჯობა X', სადაც X წარმოადგენს ობიექტი person–ის სახელს.

// let person = {
//  firstName: "ნათია",
//  age: 30,
//  sayHallo : function() {
//    return 'გამარჯობა ' + this.firstName
//  }
// };

// console.log(person.sayHallo())





// დავალება 7.20
// შექმენით პროდუქტის ობიექტი product, რომელსაც ექნება შემდეგი თვისებები: weight, quantity, price, photo და
// მეთოდი (ფუნქცია) onstock, რომელიც დაადგენს არის თუ არა მარაგში პროდუქტი – თუ რაოდენობა (quantity)
// უდრის 0, მაშინ Html დოკუმენტში დაბეჭდეთ 'მარაგი ამოიწურა', თუ მეტია 0–ზე, Html დოკუმენტში დავბეჭდოთ
// 'მარაგში არის X პროდუქტი', სადაც X არის პროდუქტის რაოდენობა.
// მოცემული ინფორმაცია გამოიტანეთ html ში bootstrap card მეშვეობით


// const product = {
//     weight : 100,
//     quantity : 10,
//     price : 50,
//     photo : '',
//     onStock : function () {
//         if(this.quantity == 0){
//             document.write('მარაგი ამოიწურა')
//         }else{
//             document.write(this.quantity)
//         }
//     }
// }

// product.onStock()





// დავალება 7.21
// შევქმნათ ფუნქცია changeProperty(key, value, obj), რომელიც ჩაანაცვლებს student ობიექტის რაიმე თვისების
// მნიშვნელობას ახალი მნიშვნელობით.


// const student = {
//  studentName : "პეტრე მგელაძე",
//  paydVolum: 700
// }

// let changeProperty = (key,value,obj) => {
//        obj[key] = value
//        return obj
// }

// // გამოიძახეთ ეს ფუნქცია ორჯერ:
// changeProperty('studentName', 'როინი ვეკუა', student);
// changeProperty('paydVolum', 900, student);


// console.log(student)