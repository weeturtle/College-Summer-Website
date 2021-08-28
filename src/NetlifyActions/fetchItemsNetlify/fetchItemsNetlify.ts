import { Handler } from '@netlify/functions';
import * as items from '../../mocks/items.json';

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      items
    }),
  }
}
