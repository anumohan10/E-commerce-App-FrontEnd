export class Cart {
    constructor(public cartId: number,
        public custId: number,
        public foodId: number,
        public vendorId: number,
        public quantity: number,
        public price: number){
            
        }
}