import { GraphQLClient } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";
import { Observable } from "rxjs";
import { createClient } from "graphql-ws";
import type { Client, SubscribePayload } from "graphql-ws";
export const graphqlClient = new GraphQLClient("http://localhost:4000/graphql");

export function fromWsClientSubscription<TData = Record<string, unknown>>(
  payload: SubscribePayload
) {
  const client = createClient({ url: "ws://localhost:4000/graphql" });
  return new Observable<TData | null>((observer) =>
    client.subscribe<TData>(payload, {
      next: (data) => observer.next(data.data),
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    })
  );
}
