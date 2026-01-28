import { cn } from "../../lib/cn" 

type DropDownProps = {
  className?: string
}

export function DropDown({ className }: DropDownProps) {
  return (
    <svg
      className={cn(
        "w-5 h-5 transition-transform duration-300",
        className
      )}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}
