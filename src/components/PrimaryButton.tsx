interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
  }
  
  const PrimaryButton = ({ title, onClick, className }: ButtonProps) => (
    <button 
        onClick={onClick}
        className={`bg-accent text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 ${className}`}>
        {title}
    </button>
  );
  
  export default PrimaryButton;
  