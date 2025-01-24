interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
  }
  
  const SecondaryButton = ({ title, onClick, className }: ButtonProps) => (
    <button 
       onClick={onClick}
       className={`ring ring-secondary font-bold text-white py-2 px-6 rounded-lg hover:bg-secondary transition duration-300 ${className}`}>
      {title}
    </button>
  );
  
  export default SecondaryButton;
  