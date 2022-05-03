
let app = new Vue({
    el: '#app',
    data: {
         userSearch: '',
    },

    components: { footerel, feedbackel, advantel, pagination,  filterel, 
        page_title, registration_icon},

    methods: {
        getJson(url){
            return fetch(url)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    },
    postJson(url, data){
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .catch(error => {
                // console.log(error)
                this.$refs.error.text = error;
            })
    },
    putJson(url, data){
        return fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .catch(error => {
                // console.log(error)
                this.$refs.error.text = error;
            })
    },


},
mounted(){


   }
        
       

});

