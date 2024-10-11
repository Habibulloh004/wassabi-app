"use client";

import { branches } from "@/components/tableColumns/branches";
import { clients } from "@/components/tableColumns/clients";
import { DataTable } from "@/components/tableColumns/data-table";
import { deliver } from "@/components/tableColumns/deliver";

function Getelements({ param }) {
  const invoices = [
    {
      title: "INV001",
      phone: "Paid",
      address: "$250.00",
    },
    
    {
      title: "INV001",
      phone: "Paid",
      address: "$250.00",
    },
    
    {
      title: "INV001",
      phone: "Paid",
      address: "$250.00",
    },
    
    {
      title: "INV001",
      phone: "Paid",
      address: "$250.00",
    },
    
    {
      title: "INV001",
      phone: "Paid",
      address: "$250.00",
    },
    
  ];
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await axios.get(`/api/${entityName}`, {
  //         next: { tags: [`${param}`] },
  //       });
  //       setTableData(res.data.data);
  //       setData(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getData();
  // }, [entityName, reflesh]);

  function getColumn(prop) {
    switch (prop) {
      case "branches":
        return branches;
      case "clients":
        return clients;
      case "deliver":
        return deliver;
      default:
        return null;
    }
  }

  return <DataTable columns={getColumn(param)} data={invoices} />;
}

export default Getelements;
