interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
  }
  
  const SecondaryButton = ({ title, onClick, className }: ButtonProps) => (
    <button 
       onClick={onClick}
       className={`bg-secondary text-white py-2 px-4 rounded-lg hover:bg-accent transition duration-300 ${className}`}>
      {title}
    </button>
  );
  
  export default SecondaryButton;
  