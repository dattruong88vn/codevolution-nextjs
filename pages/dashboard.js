import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

  useEffect(() => {
    const securePage = async () => {
      const abc = await getSession();
      console.log("111", abc);
    };
    securePage();
  }, []);
  return <h2>Dashboard</h2>;
};

export default Dashboard;
