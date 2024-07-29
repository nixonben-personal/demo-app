import { FormControl } from "@angular/forms";

export interface  login{
    username:FormControl<string|null>;
    password:FormControl<string|null>;
}