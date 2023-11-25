import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapService{
    faceSnaps:FaceSnap[] = [
        {
        id:1,
        title: 'Ibrahim',
        description:'Le Roi des informaticiens !',
        imageUrl:'https://media.licdn.com/dms/image/D4E35AQH2o5rzoaytPQ/profile-framedphoto-shrink_400_400/0/1686219859933?e=1700931600&v=beta&t=b_FKD8BOjXNwZ3Ylk0gOb8EbekQS1YXa68NRNjIEx0M',
        createdDate: new Date(),
        snaps:0,
        location: 'Abidjan',
       
      },
      {
        id:2,
        title: 'Booba',
        description:'Meilleur rapeur francais !',
        imageUrl: 'https://th.bing.com/th/id/OIP.4ke3rkbSGbaJTVEUe02fBgHaHZ?w=169&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        createdDate: new Date(),
        snaps:0,
       
      },
       {
        id:3,
        title: 'Damso',
        description:'Déuxième Meilleur rapeur francais !',
        imageUrl: 'https://th.bing.com/th?q=Damso+Visage&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=CI&setlang=fr&adlt=moderate&t=1&mw=247',
        createdDate: new Date(),
        snaps:0,
        location: 'paris',
       
      }
    ]
    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId:number): FaceSnap{

        const faceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId)
        if(!faceSnap){
          throw new Error('FaceSnap not found');

        }else{
          return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'):void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
  
 
}
