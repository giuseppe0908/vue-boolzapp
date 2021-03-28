var app = new Vue({
    el:'#root',
    data:{
      contacts: contacts,
       user: [],
      input:" ",
    },

     methods: {
       click_utente: function (contact){
           this.user = contact,
           console.log(this.user);
       },
       //aggiunta di un messaggio nella chat con data e risposta con set timeour
       add: function (user) {
   //creo date per prendermi l'ora attuale
         var date = new Date();
         var ora = date.getHours();
         var minuti = date.getMinutes();
         var mese = date.getMonth() +1;
         var secondi = date.getSeconds();
         var anno = date.getFullYear();
         var giorno = date.getDate();
//concateno le stringhe per ottenere la data totale
         var data_tot =`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
         // giorno+"/"+mese+"/"+ anno +" " +ora+":"+ minuti+":" + secondi;
         console.log(data_tot);

         if (this.input != " ") {
           let aggiunta = {
            date:data_tot,
            text: this.input,
            status:'sent',
            }

            user.messages.push(aggiunta);
            console.log(this.user.messages);
            this.input = " ";

            setTimeout(function(){
              //ricreo data per prendermi il il secondo attuale
              var data_second = new Date();
              var secondi = data_second.getSeconds();
              var data_tot =`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
              let ok = {
                date:data_tot,
                text: "ok",
                status:'received',
              }
              //aggiungo messaggio automatico
              user.messages.push(ok);
            }, 1000);

        }

      },
    }

});
