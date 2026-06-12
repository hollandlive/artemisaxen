"use client"

interface Props {
  targetId:  string
  className?: string
}

export default function SectionArrow({ targetId, className = "" }: Props) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`cursor-pointer appearance-none bg-transparent border-0 p-2
                  transition-opacity hover:opacity-50 ${className}`}
    >
      <svg width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
        <line
          x1="9" y1="2" x2="9" y2="20"
          stroke="#1C1B19" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.22"
        />
        <path
          d="M3 14l6 7 6-7"
          stroke="#1C1B19" strokeWidth="1"
          strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.22"
        />
      </svg>
    </button>
  )
}
