import { db } from "../database/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { toDatetime , lastWeekDay, getInstallmentsStatus} from "../utils/converters.js";

export async function registerVariableExpenses(req,res) {
    const { user, title , value, date, status } = req.body
    try {
      const docRef = await addDoc(collection(db, "variable_expenses"), {
        user ,
        title ,
        value ,
        date,
        status
      });
      res.send("Conta cadastrada com sucesso!")
    } catch (e) {
      console.error("Error adding document: ", e);
      res.send("Conta não cadastrada!")
    }
  }

export async function registerFixedExpenses(req,res) {
  const { user, title , installmentsNumber , currentInstallment , installmentValue, installmentStartObject, dueDay, payedDateObject } = req.body
  const payedDate = toDatetime(payedDateObject)
  const installmentStartDate = toDatetime(installmentStartObject)
  let allInstallmentStatus = getInstallmentsStatus(installmentsNumber , installmentStartDate)
  
  try {
    const docRef = await addDoc(collection(db, "fixed_expenses"), {
      user ,
      title ,
      installmentValue ,
      allInstallmentStatus
    });
    res.send("Conta cadastrada com sucesso!")
  } catch (e) {
    console.error("Error adding document: ", e);
    res.send("Conta não cadastrada!")
  }
}

export async function registerVariableRevenue(req,res) {
  const { user, title , value, receivedDay } = req.body
  try {
    const docRef = await addDoc(collection(db, "variable_revenue"), {
      user ,
      title ,
      value ,
      receivedDay
    });
    res.send("Renda cadastrada com sucesso!")
  } catch (e) {
    console.error("Error adding document: ", e);
    res.send("Renda não cadastrada!")
  }
}

export async function registerFixedRevenue(req,res) {
  const { user, title , monthlyValue , payDay , status } = req.body
  try {
    const docRef = await addDoc(collection(db, "fixed_revenue"), {
      user ,
      title ,
      monthlyValue ,
      payDay ,
      status
    });
    res.send("Renda cadastrada com sucesso!")
  } catch (e) {
    console.error("Error adding document: ", e);
    res.send("Renda não cadastrada!")
  }
}