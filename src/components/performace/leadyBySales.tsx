import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function LeadBySales() {
  return (
    <Card className="h-full"> {/* Ensure the Card takes up full height */}
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-48"> {/* Control the height of the chart content */}
        <ChartContainer config={chartConfig}>

            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="#1898bd" radius={8} />
            </BarChart>
      
        </ChartContainer>
      </CardContent>
  
    </Card>
  )
}
