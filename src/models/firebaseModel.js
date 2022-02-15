import { collection, query , where , getDocs} from "firebase/firestore";
import { db } from "../database/firebaseConfig.js";

export async function getUserRevenue(user) {
    const colectionFixedRevenue = collection(db, "fixed_revenue");
    const colectionVariableRevenue = collection(db, "variable_revenue");
    const stateQueryFixedRevenue = query(colectionFixedRevenue, where("user", "==", user));
    const stateQueryVariableRevenue = query(colectionVariableRevenue, where("user", "==", user));
    const querySnapshotFixedRevenue = await getDocs(stateQueryFixedRevenue);
    const querySnapshotVariableRevenue = await getDocs(stateQueryVariableRevenue);

    const userRevenue = {}
    querySnapshotFixedRevenue.forEach((doc) => {
        userRevenue[doc.id] = doc.data()
    });
    querySnapshotVariableRevenue.forEach((doc) => {
        userRevenue[doc.id] = doc.data()
    });
    
    return userRevenue
}
export async function getUserExpenses(user) {
    const colectionFixedExpenses = collection(db, "fixed_expenses");
    const colectionVariableExpenses = collection(db, "variable_expenses");
    const stateQueryFixedExpenses = query(colectionFixedExpenses, where("user", "==", user));
    const stateQueryVariableExpenses = query(colectionVariableExpenses, where("user", "==", user));
    const querySnapshotFixedExpenses = await getDocs(stateQueryFixedExpenses);
    const querySnapshotVariableExpenses = await getDocs(stateQueryVariableExpenses);
    
    const userExpenses = {}
    querySnapshotFixedExpenses.forEach((doc) => {
        userExpenses[doc.id] = doc.data()
    });
    querySnapshotVariableExpenses.forEach((doc) => {
        userExpenses[doc.id] = doc.data()
    });
    
    return userExpenses
}