

// function mysum(a,b) 

// { return new Promise(function(resolve, reject){
//         const ans = a + b;
//         reject(ans);
//       });
//     };

// function mins(mysum, x) 

//     { return new Promise(function(resolve, reject){
//             const ans = mysum - x;
//             reject(ans); 
//           });
//         };

// // mysum(5,6).then(function(res){
// //     console.log(res)
// //     return mins(res,2)
// // }).then(function(res){
// //     console.log(res)


// // });

// async function allpro(){


//   try {
//     let pro1 = await mysum(5,6)
//     console.log(`Addition Answer = ${pro1}`);
//     let pro2 = await mins(pro1,6)
//     console.log(`Subration Answer = ${pro2}`);
 
// } catch (error) {
//     console.log('Error:', error);
// }



// } allpro();






// let empdata = [
//     {name : 'Ali', age : 25 , salary : 50000},
//     { name : 'Aliya', age : 35 , salary : 40000},
//     {name : 'Aliza', age : 28 , salary : 30000}]

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//      const sum = 4 + 2;
//      if(isNaN(sum)) {
//        reject('Error while calculating sum.');
//      } else {
//        resolve(sum);
//      }
//     }, 2000);
//    });
   
//    promise.then(function(result) {
//     console.log(result);
//    });
//    const Person = [{name:"Zainab",Id:1},{name:"Ahmed",Id:2}]

//    function Employee(id){
//        return new Promise((resolve, reject)=>{
//           Person.forEach(element => {
//            if(element.Id == id){
//                resolve(id)
//            }
//           });
   
//            reject(new Error('fail due to id not match'))
       
//         })
//    }
   
//    function allowances(months){
//           return new Promise((resolve, reject)=>{
//            if(months >=3){
//                resolve(10000)
//            }
//            else{
//                reject(new Error('Fail due to months <3'))
//            }
//           })
//    }
   
//    Employee(2).then(function(res){
//        console.log(res + " Verified Employee")
//        return allowances(3).then(function(res){
//            console.log("Allowances amount is "+res);
//        })
//    })



function mysum(a,b) 

{ return new Promise(function(resolve, reject){
        const sum = a + b;
        // if(isNaN(sum)) {
        //          reject('Error while calculating sum.');
        //        } else {
        //          resolve(sum);
        //        }
        resolve(sum);
      });
    };

function mins(mysum, x) 

    { return new Promise(function(resolve, reject){
            const ans = mysum - x;
            
            console.log(mysum);
            resolve(ans); 
          });
        };

// mysum(5,6).then(function(res){
//     console.log(res)
//     return mins(res,2)
// }).then(function(res){
//     console.log(res)


// });

// async function allpro(){


//   try {
//     let pro1 = await mysum(5,"ali")
//     console.log(`Addition Answer = ${pro1}`);
//     let pro2 = await mins(pro1,6)
//     console.log(`Subration Answer = ${pro2}`);
 
// } catch (error) {
//     console.log('Error:', error);
// }



// } allpro();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

let promise1 = mysum(5,5);

Promise.all([promise1, promise2]).then((values) => {
  let promise2 = mins(values,6);
  console.log(values);
});


// let promise1 = mysum(5,5);


// Promise.all([promise1]).then((values) => {
//   let promise2 = mins(values,6);
//   console.log(promise2);
//   console.log(values);
// });


