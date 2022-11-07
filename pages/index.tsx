import { useQueryClient } from "@tanstack/react-query";

import { fromWsClientSubscription } from "../hooks";
import { useEffect } from "react";
interface INotification {
  newNotification: {
    message: string;
    id: string;
    title: string;
    createdat: string;
  };
}
const NewNotificationDocument = /*#__PURE__*/ `
    subscription newNotification {
  newNotification {
    message
    id
    title
    createdat
  }
}
    `;
function GraphQlWsExample() {
  if (typeof window === "undefined") return null;
  const url = "ws://localhost:4000/graphql";
  const queryClient = useQueryClient();
  useEffect(() => {
    const ws = new WebSocket(url, "graphql-ws");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "connection_init", payload: {} }));
      ws.send(
        JSON.stringify({
          id: "1",
          type: "start",
          payload: {
            extensions: {},
            operationName: "newNotification",
            query: NewNotificationDocument,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      console.log(event);
    };

    ws.onerror = (err) => {
      console.log(err);
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
  }, []);

  return <div style={{ color: "white" }}>Data:</div>;
}

export default function Home() {
  return (
    <main>
      <nav>
        <h1>Logo</h1>
        <h2>Notification</h2>
      </nav>
      <section>
        <form>
          <input type="text" placeholder="add data" />
        </form>
        <GraphQlWsExample />
      </section>
    </main>
  );
}
