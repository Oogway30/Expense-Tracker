"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { useSelector } from 'react-redux'
import {getTotalSpentByCategory } from '../Redux/Transaction/transactionSlice'
import type { RootState } from '../Redux/store'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"

export const description = "A bar chart"



const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3CB371",
  },
} satisfies ChartConfig

export function ChartReport() {
  const transactions = useSelector((state: RootState) => state.transaction.transactions)
  const chartData = useSelector(getTotalSpentByCategory)


  return (
    <Card className={transactions.length!==0? "backdrop-blur-xs bg-white/0.5" : 'backdrop-blur-xs bg-white/0.5 flex flex-col justify-center items-center'} ><CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
      {
        transactions.length!==0?
      
      <><CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 20)} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent></> : <div className="text-2xl">No Data Available!</div>
    
}
    </Card>
  )
}
