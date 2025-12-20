import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCSV } from "@/utils/fetchCSV.js";
import MemberProfile from "./MemberProfile";

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqVBXQyYet-ueLhE2tzHe3fVNVwaiandynVfEJv3LMkEVqAVhjVBIaOF7UpiijL95oV-XQY2w0Lcah/pub?gid=0&single=true&output=csv"

export default function MemberList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCSV(URL).then(setItems).catch(console.error);
  }, []);

  return (
    <div className="container">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
    {items.map((item, index) => (
      <div className="col" key={index}>
        <MemberProfile item={item} />
      </div>
    ))}
  </div>
</div>
  );
}