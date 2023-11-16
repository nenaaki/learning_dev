import { initUrqlClient } from 'next-urql';
import { Client } from 'urql';
import nookies from "nookies";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(token?: string): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = token ? initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      false
    ) : initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false
    );
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}

export const getToken = (ctx?: any): string | undefined => {

  const cookies = nookies.get(ctx);
  const token = cookies?.token;

  return token;
};
