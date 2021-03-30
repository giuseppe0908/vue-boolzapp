var app = new Vue({
    el:'#root',
    data:{
      contacts: contacts,
       user: [],
      input:"",
      input_search:"",
      index:0,
      indice: -1,
      show: false,
    },

    methods: {
      //FUNZIONE PER PRENDERE L'ULTIMA DATA
       last_acces:function(index) {
         const message = this.contacts[index].messages;

         const last_data = message.length - 1;
        return message[last_data].date;
      },
       // getTime: function(data,i){
       //   let date = new Date(data);
       //   let hours = date.getHours();
       //   let minuts = date.getMinutes();
       //   return `${hours}:${minuts}`;
       // },

       // AGGIUNTA DI UN MESSAGGIO NELLA CHAT CON DATA E RISPOSTA CON SET TIMEOUT
       add: function (index) {
   //CREO DATE PER PRENDERMI IL GIORNOO ATTUALE
         var date = new Date();
         var ora = date.getHours();
         var minuti = date.getMinutes();
         var mese = date.getMonth() +1;
         var secondi = date.getSeconds();
         var anno = date.getFullYear();
         var giorno = date.getDate();
  //CONCATENO LE STRINGHE PER RICAVARE LA DATA TOTALE
         var data_tot =`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;  // giorno+"/"+mese+"/"+ anno +" " +ora+":"+ minuti+":" + secondi;

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
      //CREO LA FUONZIONE PER FAR APPARIRE IL DROPDOWN
      lista:function (i) {
        console.log('cis');
        this.indice = i;
        this.show = !this.show;
        console.log("deve essere true per comparires"+this.show);
      },
      //CREO LA FUONZIONE PER  ELIMINARE IL MESSAGGIO
      remove:function(i){
        this.contacts[this.index].messages.splice(i, 1);
        console.log(this.contacts[this.index].messages);

      },
    }

});
