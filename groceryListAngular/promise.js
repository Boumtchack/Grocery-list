function ajouterAAAA(string) {
  return new Promise((resolve,reject)=>{
    if(typeof string != String){
      reject("c'est pas une string")
    }
    resolve(string+'AAAA')
  })
}

function split(string) {
  return new Promise((resolve, reject)=>{
    resolve(string.split(''))
    }
  )
}

ajouterAAAA(12)
  .then(i => split(i))
  .then(i => console.log(i))
  .catch((e)=>console.log(e))
