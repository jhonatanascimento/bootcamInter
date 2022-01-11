 function getAdmins(map){
     let admins = [];
     for([key,value] of map){
         if(value === 'Admin'){
             admins.push(key);
         }
     }
     return admins;


   
 }
 const usuarios = new Map();

    
 usuarios.set('Luis', 'Admin');
 usuarios.set('Tete', 'Admin');
 usuarios.set('Paulo', 'Admin');
 usuarios.set('Eu', 'user');
 usuarios.set('Luisa', 'Admin');

 console.log(getAdmins(usuarios));