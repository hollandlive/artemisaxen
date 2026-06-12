type Props = {
  children:   React.ReactNode
  light?:     boolean  // true → muted white for dark section backgrounds
  className?: string
}

export default function SectionLabel({ children, light, className }: Props) {
  return (
    <p
      className={[
        "text-[11px] font-medium uppercase tracking-[0.12em] mb-3",
        light ? "text-[#6B6963]" : "text-muted",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  )
}
