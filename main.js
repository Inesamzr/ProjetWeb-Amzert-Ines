const app = Vue.createApp({
    data(){
        return{
            coachs : []
        }
    },
    created(){
        fetch('http://localhost:3000/api/stuff/coachs')
        .then(res => res.json())
        .then(data => {
            for(let i=0; i<data.length; i++){
                let coach = {
                    id : data[i].idcoach,
                    pseudo : data[i].pseudo,
                    biographie : data[i].biographie,
                    langue : data[i].langue,
                    prix : data[i].prix,
                    idjeu : data[i].jeu,
                    showBio : false
                }
                this.coachs.push(coach)
            }
        })
    },
    methods : {
        MontrerBio(id){
            for(let i = 0; i<this.coachs.length; i++){
                if(this.coachs[i].id == id){
                    this.coachs[i].showBio = true
                }
            }
        }
    }
})