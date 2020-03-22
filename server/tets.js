var resolveAfter2Seconds = function() {
    console.log("Initialisation de la promesse lente");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("lente");
        console.log("La promesse lente est terminée");
      }, 2000);
    });
  };
  
  var resolveAfter1Second = function() {
    console.log("Initialisation de la promesse rapide");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("rapide");
        console.log("La promesse rapide est terminée");
      }, 1000);
    });
  };
  
  var sequentialStart = async function() {
    console.log('==Début séquentiel==');
  
    console.log("============")
    // 1. L'exécution atteint ce point quasi-instantanément
    const lente = await resolveAfter2Seconds();
    console.log(lente); // 2. cela s'exécute 2s après 1.
  
    const rapide = await resolveAfter1Second();
    console.log(rapide); // 3. cela s'exécute 3s après 1.
  }
  

  sequentialStart()