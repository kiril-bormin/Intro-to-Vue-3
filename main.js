const product = 'Bottes'
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
<<<<<<< Updated upstream
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
=======
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
>>>>>>> Stashed changes
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
<<<<<<< Updated upstream
        updateImage(variantImage){
            this.image = variantImage
        },
        deleteFromCart(){
            if(this.cart > 0){
                this.cart -= 1
            }
            else{}
=======
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },  
        inStock(){
            return this.variants[this.selectedVariant].quantity
>>>>>>> Stashed changes
        }
    }
})
