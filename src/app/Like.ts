export class Like 
{
    uid: string;
    data: number;

    constructor(n: number, id?: string )
     {
        this.data = n;
        this.uid = id || null;    
    }

}