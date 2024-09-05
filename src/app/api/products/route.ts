import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../../types/Product"
import { productsStore } from "../../../types/ProductStore";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest, res: NextApiResponse<Product[]>) {
    const jsonBody = await req.json()
    const product = (jsonBody as Product);
    productsStore.push(product);
    return NextResponse.json(productsStore);
}

export function GET(req: NextRequest, res: NextApiResponse<Product>) {
    return NextResponse.json(productsStore)
}