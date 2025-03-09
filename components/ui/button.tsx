import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:transition-opacity before:duration-300 before:ease-out before:opacity-0 hover:before:opacity-100",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 before:bg-gradient-to-r before:from-primary-foreground/10 before:to-transparent",
        destructive: "bg-destructive text-destructive-foreground hover:shadow-lg hover:shadow-destructive/20 before:bg-gradient-to-r before:from-destructive-foreground/10 before:to-transparent",
        outline: "border border-input bg-background hover:border-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/10 before:bg-gradient-to-r before:from-accent/10 before:to-transparent",
        secondary: "bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/20 before:bg-gradient-to-r before:from-secondary-foreground/10 before:to-transparent",
        ghost: "hover:bg-accent/5 hover:text-accent-foreground before:bg-gradient-to-r before:from-accent/5 before:to-transparent",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        glass: "backdrop-blur-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/20 before:bg-gradient-to-r before:from-white/10 before:to-transparent",
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:from-primary/90 hover:to-secondary/90 before:bg-gradient-to-r before:from-white/10 before:to-transparent"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-12 rounded-md px-10 text-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

