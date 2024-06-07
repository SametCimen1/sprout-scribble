'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TotalOrders } from "@/lib/infer-type"
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Earnings({totalOrders}: {totalOrders: TotalOrders[]}){

    const router = useRouter();
    const searchParams = useSearchParams();
    const filter = searchParams.get('filter') || "week";

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your Revenue: 0</CardTitle>
                <CardDescription>Here are your recent earnings</CardDescription>
                <div>
                    <Badge
                    className={cn('cursor-pointer', filter ==='week' ? "bg-primary" : "bg-primary/25")}
                    onClick={() => router.push('/dashboard/analytics/?filter=week',{
                        scroll:false
                    })}>
                        This week
                    </Badge>
                    <Badge
                    className={cn('cursor-pointer', filter ==='month' ? "bg-primary" : "bg-primary/25")}
                    onClick={() => router.push('/dashboard/analytics/?filter=month',{
                        scroll:false
                    })}>
                        This Month
                    </Badge>
                </div>
            </CardHeader>
        </Card>
    )
}