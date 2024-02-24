import "./App.css";
import { supabase } from "../supabase.js";
import { useEffect, useState } from "react";

export default function App() {
  const [datam, setDatam] = useState([]);

  useEffect(() => {
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          console.log("Change received!", payload);
        },
      )
      .subscribe();
  }, []);

  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
      {JSON.stringify(datam)}
    </main>
  );
}
