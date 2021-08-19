import { rest } from 'msw';
import * as items from './items.json';

export const handlers = [
    rest.get('/getItems', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items
            })
        )
    })
]

