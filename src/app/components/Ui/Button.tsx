

interface ButtonProps {
    children: string;
    type: 'button' | 'submit' | 'reset';
}
const Button:React.FC<ButtonProps> = ({children,type}) => {
  return (
    <button type={type} className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[#ffe459] px-6 font-medium text-black ease-out hover:scale-105 duration-1000 `}>
          {children}
        </button>
  )
}

export default Button