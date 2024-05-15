import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = { firstName:"Mohar", lastName: "Maity",
    email:"moharmaity2005@gmail.com"
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName || 'Guest'}
       subtext="Access and manage your account and transactions successfully"
       />
       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.34}
       />
       </header>
       RECENT TRANSATION
      </div>
      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500.00}]}
      />
    </section>
  )
}

export default Home