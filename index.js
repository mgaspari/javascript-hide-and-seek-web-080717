var getFirstSelector = (selector) => {
  return document.querySelector(selector)
}
 var nestedTarget = () => {
   return document.getElementById('nested').querySelector('.target')
 }

 var deepestChild = () => {
   return document.getElementById('grand-node').querySelectorAll('div')[3]
 }

 increaseRankBy = (n) =>{
  //  let a = document.getElementById('app').querySelector('ul.ranked-list li')
   //
  //  for (let i = 0; i < a.length; i++) {
   //
  //    a[i].innerHTML = (a[i].innerHTML + n).toString()
  //  }
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
}
 }
