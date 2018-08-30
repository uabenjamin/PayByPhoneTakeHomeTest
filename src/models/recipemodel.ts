export class RecipeModel {
    public name: string;
    public type: string;
    public cook_time: number;
    public ingredients: string[];

    constructor(data: any) {
        this.name = data.name;
        this.type = data.type;
        this.cook_time = data.cook_time;
        this.ingredients = data.ingredients;
    }
}