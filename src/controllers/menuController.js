import { firestore } from '../firebase/firebase';
import { collection, doc, getDoc } from "firebase/firestore";

var chelasList
var tacosList

export async function checkMenuData(){
    // const docRef = collection(firestore, "menu");
    const docRef2 = doc(firestore, "menu", "vsoe9Umoblhf7880a3QY");
      
    const docSnap = await getDoc(docRef2);
     if (docSnap.exists()) {
       return docSnap.data()
     } else {
       // docSnap.data() will be undefined in this case
       return ("No such document!");
     }
     
   }

function getChelas(menuData) {
// Haz lo que necesites con menuData
    chelasList=menuData["chelas"]
    return (chelasList )

}

  