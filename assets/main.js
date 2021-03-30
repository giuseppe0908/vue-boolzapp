var app = new Vue({
    el:'#root',
    data:{
      contacts: contacts,
       user: [],
      input:"",
      input_search:"",
      index:0,
      index_mex: -1,

    },

    methods: {
       // click_utente: function (contact){
       //     this.user = contact,
       //     console.log(this.user);
       // },
      //  last_acces:function(index) {
      //    const message = this.contacts[index].messages;
      //    const last_data = message.lenght - 1;
      //
      //   return message[last_data].date;
      // },

       // getTime: function(data,i){
       //   let date = new Date(data);
       //   let hours = date.getHours();
       //   let minuts = date.getMinutes();
       //   return `${hours}:${minuts}`;
       // },
       //aggiunta di un messaggio nella chat con data e risposta con set timeour
       add: function (index) {
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
         const index_now = this.index;

         if (this.input != " ") {
           let aggiunta = {
            date:data_tot,
            text: this.input,
            status:'sent',
            }

            this.contacts[index_now].messages.push(aggiunta);

            this.input = " ";

            setTimeout(() => {
              //ricreo data per prendermi il il secondo attuale
              var data_second = new Date();
              var secondi = data_second.getSeconds();
              var data_tot =`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
              let ok = {
                date:data_tot,
                text: "Ok!",
                status:'received',
              }
              //aggiungo messaggio automatico
              this.contacts[index_now].messages.push(ok);
            }, 1000);

        }

      },
      remove:function(i){

        this.contacts[this.index].messages.splice(i, 1);

      },
    }

});
