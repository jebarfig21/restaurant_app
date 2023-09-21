import { firestore } from '../firebase/firebase';
import { collection, doc, getDoc } from "firebase/firestore";

var chelasList
var tacosList

export async function checkBlogData(){
    // const docRef = collection(firestore, "menu");
    const docRef2 = doc(firestore, "blog", "X70rKPacenemR7hyzGAX");
      
    const docSnap = await getDoc(docRef2);
     if (docSnap.exists()) {
       return docSnap.data()
     } else {
       // docSnap.data() will be undefined in this case
       return ("No such document!");
     }
     
   }
