export class orderstatus {
    constructor(public id: number,
        public orderId: number,
        public eta: string,
        public orderstatus: string,
        public foodVendorID: number,
        public custId: number,
        public quantity: number){
            
        }
}