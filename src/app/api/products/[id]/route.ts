import { Product } from "../../../../types/Product"
import { productsStore } from "../../../../types/ProductStore";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

interface ErrorResponse {
    message: string
}

type GETREsponseType = Product | ErrorResponse

export function GET(req: NextRequest, { params }: { params: { id: string } }, res: NextApiResponse<GETREsponseType>) {
    let id = params.id
    const product: Product | undefined = productsStore.find(p => p.id == id)
    if (product) {
        return NextResponse.json(product)
    } else {
        return NextResponse.json({
            message: "Product not found"
        }, {
            status: 404
        })
    }

}