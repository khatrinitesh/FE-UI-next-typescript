export interface MainLayoutProps {
  children: React.ReactNode;
}
export interface ButtonProps {
  label: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?:
    | "yellow"
    | "outline"
    | "darkblue"
    | "whiteBorder"
    | "white"
    | "whiteBlueBorder";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export interface HeadTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}
