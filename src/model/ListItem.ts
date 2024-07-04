export interface Item {
    id: string,
    item: string,
    check: boolean,
}

export default class ListItem implements Item {    

    constructor(private _id:string = '', private _item:string = '', private _check:boolean = false) {}

    public get id(): string {
        return this._id;
    }

    public set id(value:string){
        this._id = value;
    }

    public  get item(): string {
        return this._item;
    }

    public set item(value:string) {
        this._item = value;
    }

    public get check(): boolean {
        return this._check;
    }

    public set check(value:boolean) {
        this._check = value;
    }

}