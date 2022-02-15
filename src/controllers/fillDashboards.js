import { db } from "../database/firebaseConfig.js";
import { collection, query , where , getDocs} from "firebase/firestore";
import { getUserExpenses, getUserRevenue } from "../models/firebaseModel.js";
import { checkExpireDate } from "../utils/checks.js";

export async function getAllFixedRevenues(req,res) {
    const { user } = req.body
  
    try {
      const docRef = collection(db, "fixed_revenue");
      const stateQuery = query(docRef, where("user", "==", user));
      const querySnapshot = await getDocs(stateQuery);
      querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
      });
      res.send("Valores encontrados com sucesso para o usuário : " + user)
    } catch (e) {
      console.error("Error adding document: ", e);
      res.send("Erro getAllFixedRevenues()")
    }
  }


export async function getDashboardData(req,res) {
  const { user } = req.body
  
  try {
    // Relação de contas no total por contas em aberto

    const userExpenses = await getUserExpenses(user)
    const userRevenue = await getUserRevenue(user)
    
    const dashboard = {}
    
    const totalBills = Object.values(userExpenses).length
    const closedBills = Object.values(userExpenses).filter((expense)=>{ return expense.status == true }).length
    
    dashboard["ratio"] = { closedBills, totalBills }
    
    // Contas que vencem esta semana

    const expiresThisWeek = Object.values(userExpenses).filter(
      (expense)=>{
          checkExpireDate(expense)
       }
      ).length

    // Contas que já venceram

    // Total da renda deste mês

    // Gasto deste mês

    // Guardado este Mês


    console.log(dashboard)
    res.send("Valores encontrados com sucesso para o usuário : " + user)
  } catch (e) {
    console.error("Error adding document: ", e);
    res.send("Erro getAllFixedRevenues()")
  }
}