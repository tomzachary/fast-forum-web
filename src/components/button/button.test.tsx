import { render, screen, fireEvent } from '@testing-library/react';
import Button from "@/components/button/button";


describe('Button - Edge Cases', () => {
    it('renders without crashing', () => {
        render(<Button label="Click Me" onClick={() => {}} />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('handles empty label', () => {
        render(<Button label="" onClick={() => {}} />);
        expect(screen.getByRole('button')).toHaveTextContent('');
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Button label="Disabled Button" onClick={handleClick} disabled={true} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Button label="Custom Class" onClick={() => {}} className="custom-class" />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });
});