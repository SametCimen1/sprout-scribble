"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type ProductColumn = {
    title: string,
    price: number,
    image: string,
    variants: any,
    id: number
}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "id",
        header:"ID",
    },
    {
        accessorKey: "title",
        header:"Title",
    },
    {
        accessorKey: "variants",
        header:"Variants",
    },
    {
        accessorKey: "price",
        header:"Price",
    },
    {
        accessorKey: "image",
        header:"Image",
    },
    {
        id: "action",
        header: "Actions"
    },
]   
