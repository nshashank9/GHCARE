import { Profile } from './profile';

export class Patient {
    id:number;
    name: string;
    age :number;
    gender : string;
    profile: Profile;

    Patient(){
        this.id=null;
        this.name="";
        this.age=null;
        this.gender="";
        this.profile = new Profile();
    }
}
 