import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
    it('renders the site logo', () => {
        render(<Header />);
        expect(screen.getByText('FastForum')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Header />);
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    });
});