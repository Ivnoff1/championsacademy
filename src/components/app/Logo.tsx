type Props = {
  variant?: "light" | "black"
}

export default function Logo({ variant = "light" }: Props) {
  const isLight = variant === "light";
  const theme = {
    bg: isLight ? "bg-white" : "bg-black",
    text: isLight ? "text-black" : "text-white",
    border: isLight ? "border border-black" : "border border-white"
  };

  return (
    <span className={`${theme.bg} ${theme.text} ${theme.border} w-fit p-2 py-1.5`}>
      #TheCampionsMx
    </span>
  );
}