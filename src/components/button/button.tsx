import styles from './button.module.scss';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({
                    label,
                    onClick,
                    disabled = false,
                    className = '',
                }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;