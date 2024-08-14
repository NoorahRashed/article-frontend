export class Articlee {
    constructor(
        public articleid:Number|null|undefined,
        public author:string,
        public title:string,
        public body:string,
        public articledate:Date,
        public Likes:number,
        public DisLikes:number,
        public Disabled:boolean
        ){}
}
