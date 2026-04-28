import { ReactNode } from "react";

export interface Product {
  title: ReactNode;
  id: number;
  name: string;
  price: number;
  body: string;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export interface FieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
export interface BackButtonProps extends ButtonProps {
  fallbackHref?: string; // optional fallback route
}
