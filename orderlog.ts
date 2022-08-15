export class orderlog {
    constructor(public orderId: number,
        public custId: number,
        public foodId: number,
        public foodName: string,
        public vendorId: number,
        public totalCost: number,
        public orderDate: string){
            
        }
}