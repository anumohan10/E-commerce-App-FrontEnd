export class Reviews {
    constructor(public reviewsId: number,
        public comments: string,
        public ratings: number,
        public custId: number,
        public foodVendorId: number,
        public foodId: number,
        public foodName: string){
        }
}