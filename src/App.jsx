import React, { useContext, useState } from "react";
import PrimaryHeading from "./componet/Headings/PrimaryHeading";
import Card from "./componet/Card/Card";
import PieChart from "./componet/Chart/PieChart";
import Transactions from "./componet/Transactions/Transactions";
import WalletContext from "./Context/WalletContext/WalletContext";
import ExpenseContext from "./Context/ExpenseContext/ExpenseContext";
import Expense from "../src/componet/Expense/Expense";
import ReactModal from "react-modal";
import { useSnackbar } from "notistack";
const App = () => {
  ReactModal.setAppElement("#root");

  const {enqueueSnackbar}=useSnackbar()
  const { wallet, setWallet } = useContext(WalletContext);
  const { ExpenseBalance, setExpenseBalance,setData,data } = useContext(ExpenseContext);
  const [isOpenExp, setIsOpenExp] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);
  const [ExpForm, setExpForm] = useState({
    ExpTitle: "",
    ExpAmt: "",
    ExpCatgeory: "",
    date: "",
  });
  const [WalletForm, setWalletForm] = useState({
    WalletAmt: "",
  });

  const handleWalletSub=(e)=>{
    e.preventDefault();
    const amount=parseFloat(WalletForm.WalletAmt);
    if(isNaN(amount)){
      enqueueSnackbar("Please enter a valid amount",{variant:"warning"});
      return;
    }
    else if(amount<=0){
      enqueueSnackbar("Please enter amount greater than 0",{variant:"warning"});
      return;
    }
    else{
      setWallet((prev)=>prev+amount);
      setWalletForm({WalletAmt:""});
      setIsOpenWallet(false);
      return;
    }
  }

  const handleExpenseForm=(e)=>{
    e.preventDefault();
    console.log(ExpForm.date)
    const amount=parseFloat(ExpForm.ExpAmt);
    if(isNaN(amount)){
       enqueueSnackbar("Please enter a valid amount",{variant:"warning"});
       return;
    }
    else if(amount<=0){
      enqueueSnackbar("Please enter amount greater than 0",{variant:"warning"});
      return;
    }
    else if(!ExpForm.ExpAmt){
      enqueueSnackbar("Please enter amount spent",{variant:"warning"});
      return;
    }
    else if(!ExpForm.ExpTitle){
      enqueueSnackbar("Please enter title of the Expense",{variant:"warning"});
      return;
    }
    else if(!ExpForm.ExpCatgeory){
      enqueueSnackbar("Please select a category of expense",{variant:"warning"});
      return;
    }
    else if(!ExpForm.date){
      enqueueSnackbar("Please select date of the expense",{variant:"warning"});
      return;
    }
    else if(amount>wallet){
      enqueueSnackbar("You have Exceeded the limits of your Wallet",{variant:"warning"});
      return;
    }
    else{
      setExpenseBalance((prev)=>prev+amount);
      setWallet((prev)=>prev-amount);
      setData(prev=>[...prev,{
        title:ExpForm.ExpTitle,
        amount:ExpForm.ExpAmt,
        date:ExpForm.date,
        category:ExpForm.ExpCatgeory
      }])
      setExpForm({
        ExpTitle:"",
        ExpAmt:"",
        ExpCatgeory:"",
        date:""
      });
      setIsOpenExp(false);
      return;
    }
  }

  const handleWalletBalance = () => {
    setIsOpenWallet(true);
  };

  const handleExpenseBalance = () => {
    setIsOpenExp(true);
  };

  return (
    <div style={{ padding: "5px 10px" }}>
      <div>
        <PrimaryHeading heading={"Expense Tracker"} />
        <div className="first-div">
          <Card
            handleClick={handleWalletBalance}
            heading={"Wallet Balance"}
            amount={wallet}
            btnColor1={"#B5DC52"}
            btnColor2={"#89E148"}
            btnName={"Add Income"}
            amtColor={"#9DFF5B"}
          />
          <Card
            handleClick={handleExpenseBalance}
            heading={"Expenses"}
            amount={ExpenseBalance}
            btnColor1={"#FF4747"}
            btnColor2={"#FF3838"}
            btnName={"Add Expense"}
            amtColor={"#F4BB4A"}
          />
          <PieChart />
        </div>
        <div className="second-div">
          <Transactions heading={"Recent Transactions"} />
          <Expense />
        </div>
      </div>
      <ReactModal
        isOpen={isOpenExp}
        onRequestClose={() => setIsOpenExp(false)}
        contentLabel="Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#EFEFEFD9",
          },
        }}
      >
        <div className="form-container">
          <h2>Add Expenses</h2>
          <form className="form-container1" onSubmit={handleExpenseForm}>
            <div className="form-elements">
              <input 
              className="InputFields" 
              name="title"
              type="text" 
              placeholder="Title" 
              value={ExpForm.ExpTitle}
              onChange={(e)=>setExpForm({...ExpForm,ExpTitle:e.target.value})}
              />
              <input
                className="InputFields"
                type="text"
                name="price"
                placeholder="Price"
                value={ExpForm.ExpAmt}
                onChange={(e)=>setExpForm({...ExpForm,ExpAmt:e.target.value})}
              />
            </div>
            <div className="form-elements">
              <select 
              name="category" 
              id="category" 
              className="InputFields" 
              value={ExpForm.ExpCatgeory}
              onChange={(e)=>setExpForm({...ExpForm,ExpCatgeory:e.target.value})}
              >
                <option className="InputFields" value="entertainment">
                  Entertainment
                </option>
                <option className="InputFields" value="travel">
                  Travel
                </option>
                <option className="InputFields" value="food">
                  Food
                </option>
              </select>
              <input 
              className="InputFields" 
              type="date" 
              name="date"
              value={ExpForm.date}
              onChange={(e)=>setExpForm({...ExpForm,date:e.target.value})}
              />
            </div>

            <div className="form-elements">
              <button type="submit" className="btn-exp">
                Add Expense
              </button>
              <button
                className="btn-cancel"
                onClick={() => setIsOpenExp(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpenWallet}
        onRequestClose={() => setIsOpenWallet(false)}
        contentLabel="Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#EFEFEFD9",
          },
        }}
      >
        <div className="form-container">
          <h2>Add Balance</h2>
          <form 
          className="form-container2" 
          onSubmit={handleWalletSub}>
            <input   type="number" placeholder="Income Amount" className="InputFields" value={WalletForm.WalletAmt} onChange={(e)=>setWalletForm({WalletAmt:e.target.value})}/>
            <button type="submit" className="btn-exp">
              Add Balance
            </button>
            <button
              onClick={() => setIsOpenWallet(false)}
              className="btn-cancel"
            >
              Cancel
            </button>
          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default App;
