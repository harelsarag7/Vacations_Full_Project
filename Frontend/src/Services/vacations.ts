import axios from "axios";
import jwtDecode from "jwt-decode";
import { vacationModel } from "../Models/vacationModel";

const BASE_URL = process.env.REACT_APP_BASE_URL

class VacationsFunctions {

   async getAllVacationsByPage(pageNumber: number): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacationsByPage/${pageNumber}`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
         
          return response;
          
       } catch (e){
           return undefined
       }
   }

   async getAllVacationsLength(): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacations/length`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
         // console.log(response);
         
          return response;
          
       } catch (e){
           return undefined
       }
   }



   async getAllVacationsByLikeByPage(pageNumber: number): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacationsByPage/bylike/${pageNumber}`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }


   async getAllVacationsByLikeLength(): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacations/bylike/length`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }


   async getAllVacationsByNow(pageNumber: number): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacationsByPage/bynow/${pageNumber}`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }

   async getAllVacationsByNowLength(): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacations/bynow/length`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }



   
   async getAllVacationsByNext(pageNumber: number): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacationsByPage/bynext/${pageNumber}`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }
   
   async getAllVacationsByNextLength(): Promise<vacationModel[] | undefined> {
       try {
         const response =  await fetch(`${BASE_URL}/api/vacations/bynext/length`, {
            mode: "cors",
            method: "GET",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
            
         }).then(res => res.json());
          return response;
          
       } catch (e){
           return undefined
       }
   }


   async unLike(vacationId:number){
      // fetch to unlike
      console.log("unLike: " + vacationId);
      if(!vacationId){
         console.log("no vacation");
         return "";
      }
      try{
          const response =  await fetch(`${BASE_URL}/api/vacations/unLike/${vacationId}`, {
            mode: "cors",
            method: "DELETE",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
         }).then(res => res.json());
         return response;
      } catch (e){
         return undefined
     }
   }


   async Like(vacationId:number){
      // fetch to like
      console.log("Like: " + vacationId);
      if(!vacationId){
         console.log("no vacation");
         return "";
      }
      try{
          const response =  await fetch(`${BASE_URL}/api/vacations/like/${vacationId}`, {
            mode: "cors",
            method: "POST",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
         }).then(res => res.json());
         return response;
      } catch (e){
         return undefined
     }
   }



   async deleteVacation(vacationId : number): Promise<string>{
      console.log("delete service: " + vacationId);

      try{ 
          const response =  await fetch(`${BASE_URL}/api/vacations/delete/${vacationId}`, {
            mode: "cors",
            method: "DELETE",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
            },
         }).then(res => res.json());


          return response;
      } catch(e) {
          return ``;
      } 
  }
   // async getCardByUserid(): Promise<vacationModel[] | undefined> {
   //    let userid = await userFunctions.getUserId();
      
   //    try {
   //       const response =  await fetch(`http://localhost:3040/api/cards/${userid}`, {
   //          mode: "cors",
   //       }).then(res => res.json());
   //       console.log(response);
         
   //        return response;
          
   //     } catch (e){
   //         return undefined
   //     }
   // }












//       async createFullCard(card : vacationModel | any) {
//       let file = card.target.files[0];
//       const url = 'http://localhost:80/api/cards';
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('userid', card.userid);
//       formData.append('businessName', card.businessName);
//       formData.append('businessDescription', card.businessDescription);
//       formData.append('location', card.location);
//       formData.append('phone', card.phone);
//       formData.append('email', card.email);
//       formData.append('templateNum', card.templateNum);
//       formData.append('website', card.website);
//       formData.append('facebook', card.facebook);
//       formData.append('fileName', file.name);
//       const config = {
//         headers: {
//           'content-type': 'multipart/form-data',
//         },
//       };
//       await axios.post(url, formData, config).then((response) => {
//         console.log(response.data);
//         return response.data
//       });
//   }


   async EditVacation( vacation : vacationModel ): Promise<any> {
      const formData = new FormData();

      formData.append("destination", vacation.destination)
      formData.append("description", vacation.description)
      formData.append("start", vacation.start.toString())
      formData.append("end", vacation.end.toString())
      formData.append("price", vacation.price.toString())
      formData.append("id", vacation.id!.toString())
      if(vacation.image){
         formData.append("image", vacation.image)
      }

      console.log(formData);
      
      const header = {
         headers: {
            "Content-Type": "multipart/form-data",                                                                                                
            "Access-Control-Origin": "*",
            "authentication": "Bearer " + window.localStorage.getItem("userToken")         }
      }

      const url = `${BASE_URL}/api/vacations/edit`;

      try {

         const response = await axios.put(url, formData, header);
         console.log(response.data);
         return response.data;
         
      } catch(e){ 
         return vacation
      }
   }


   async createVacation( vacation : vacationModel ): Promise<any> {
      const formData = new FormData();

      formData.append("destination", vacation.destination)
      formData.append("description", vacation.description)
      formData.append("start", vacation.start.toString())
      formData.append("end", vacation.end.toString())
      formData.append("price", vacation.price.toString())
      formData.append("image", vacation.image)

      console.log(formData);
      
      const header = {
         headers: {
            "Content-Type": "multipart/form-data",                                                                                                
            "Access-Control-Origin": "*",
            "authentication": "Bearer " + window.localStorage.getItem("userToken")         }
      }

      const url = `${BASE_URL}/api/vacations/add`;

      try {

         const response = await axios.post(url, formData, header);
         console.log(response.data);
         return response.data;
         
      } catch(e){ 
         return vacation
      }
   }



   async getVacationsLikes(): Promise<vacationModel[] | undefined> {
      try {
        const response =  await fetch(`${BASE_URL}/api/vacations/vacationsAdminLikes`, {
           mode: "cors",
           method: "GET",
           headers : {
              "Content-Type": "application/json",                                                                                                
              "Access-Control-Origin": "*",
              "authentication": "Bearer " + window.localStorage.getItem("userToken")
           },
           
        }).then(res => res.json());
         return response;
         
      } catch (e){
          return undefined
      }
  }
      //  try {
      //    const details: vacationModel = await fetch(`${BASE_URL}/api/vacations/add`, {
      //       mode: "cors",
      //       method: "POST",
      //       headers : {
      //          "Content-Type": "multipart/form-data",                                                                                                
      //          "Access-Control-Origin": "*",
      //          "authentication": "Bearer " + window.localStorage.getItem("userToken")
               
      //       },
      //       // body:  new FormData(card),
      //       body:  JSON.stringify(vacation),
            
      //    }).then(res => res.json());

      //       console.log(details);
            
      //    return details;
      // } catch (e) {
      //    console.log(e);
      //    console.log("Failed to create vacation");
      //    return vacation;
      // }

   // }

   async updateCard( card : vacationModel, id: number ): Promise<vacationModel> {

      try {
         const details: vacationModel = await fetch(`http://localhost:3040/api/editcard/${id}`, {
            mode: "cors",
            method: "PUT",
            headers : {
               "Content-Type": "application/json",                                                                                                
               "Access-Control-Origin": "*",
               "authentication": "Bearer " + window.localStorage.getItem("userToken")
               
            },
            
            // body:  new FormData(card),
            body:  JSON.stringify(card),
            
         }).then(res => res.json());
         console.log(card);

            console.log(details);
            
         return details;
      } catch (e) {
         console.log(e);
         console.log("Failed to update card");
         return card;
      }

   }


   async getCard(id: number | undefined) {
      try {
         const response =  await fetch(`http://localhost:3040/api/card/${id}`, {
            mode: "cors",
         }).then(res => res.json());
         
         const image = await fetch(`http://localhost:3040/api/card/image/${id}`, {
            mode: "cors",
         })
         console.log(image.url);
         response.upload = image.url

          return response;
          
       } catch (e){
           return undefined
       }
   }




}
export const vacationsFunctions = new VacationsFunctions();
